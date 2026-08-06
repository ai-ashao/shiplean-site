import { spawn } from 'node:child_process'
import process from 'node:process'

const port = 41749
const baseUrl = `http://127.0.0.1:${port}`
const output = []
const server = spawn(
  'pnpm',
  ['exec', 'vite', '--host', '127.0.0.1', '--port', String(port), '--strictPort'],
  {
    cwd: process.cwd(),
    env: { ...process.env, VITE_SITE_URL: baseUrl },
    stdio: ['ignore', 'pipe', 'pipe'],
  },
)

server.stdout.on('data', (chunk) => output.push(chunk.toString()))
server.stderr.on('data', (chunk) => output.push(chunk.toString()))

function assert(condition, message) {
  if (!condition) throw new Error(message)
}

async function waitForServer() {
  const deadline = Date.now() + 20_000
  while (Date.now() < deadline) {
    try {
      const response = await fetch(baseUrl)
      if (response.ok) return
    } catch {
      // Still starting.
    }
    await new Promise((resolve) => setTimeout(resolve, 160))
  }
  throw new Error(`Vite did not start.\n${output.join('')}`)
}

async function request(path) {
  const response = await fetch(`${baseUrl}${path}`)
  return { response, text: await response.text() }
}

try {
  await waitForServer()
  const home = await request('/')
  assert(home.response.status === 200, 'Home must return 200.')
  assert(home.text.includes('Build the product'), 'English product promise is missing.')
  assert(home.text.includes(`rel="canonical" href="${baseUrl}/"`), 'Canonical is missing.')
  assert(home.text.includes('application/ld+json'), 'Structured data is missing.')
  assert(
    home.response.headers.get('x-content-type-options') === 'nosniff',
    'Security headers are missing.',
  )
  assert(
    home.response.headers.get('content-security-policy')?.includes("frame-ancestors 'none'"),
    'CSP is missing.',
  )

  const chinese = await request('/zh')
  assert(chinese.response.status === 200, 'Chinese page must return 200.')
  assert(chinese.text.includes('<html lang="zh-CN">'), 'Chinese document language is missing.')
  assert(chinese.text.includes('把时间花在产品上'), 'Chinese product promise is missing.')
  assert(/hrefLang="zh-CN"/i.test(chinese.text), 'Chinese hreflang is missing.')

  const robots = await request('/robots.txt')
  assert(
    robots.response.status === 200 && robots.text.includes('/sitemap.xml'),
    'Robots is invalid.',
  )
  const sitemap = await request('/sitemap.xml')
  assert(
    sitemap.response.status === 200 && sitemap.text.includes(`${baseUrl}/zh`),
    'Sitemap is invalid.',
  )

  console.log('E2E smoke passed: bilingual landing, metadata, security, robots, and sitemap.')
} finally {
  server.kill('SIGTERM')
  await Promise.race([
    new Promise((resolve) => server.once('exit', resolve)),
    new Promise((resolve) => setTimeout(resolve, 2_000)),
  ])
}
