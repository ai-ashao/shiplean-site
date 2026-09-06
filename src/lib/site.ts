export function parseSiteUrl(value?: string) {
  const raw = value?.trim() || 'https://shiplean.dev'
  const url = new URL(raw)
  if (!['http:', 'https:'].includes(url.protocol)) {
    throw new Error('VITE_SITE_URL must use HTTP(S).')
  }
  return url.toString().replace(/\/$/, '')
}

export const site = {
  name: 'ShipLean',
  url: parseSiteUrl(import.meta.env.VITE_SITE_URL),
  githubUrl: 'https://github.com/ai-ashao/shiplean',
  description:
    'An SEO-first TanStack Start website foundation for coding agents, with strict Tool Mode and SEO-first SaaS acquisition surfaces.',
}

export function absoluteUrl(path = '/') {
  return new URL(path, site.url).toString()
}
