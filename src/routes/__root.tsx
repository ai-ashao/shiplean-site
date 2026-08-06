import {
  createRootRoute,
  HeadContent,
  Link,
  Outlet,
  Scripts,
  useRouterState,
} from '@tanstack/react-router'
import type { ReactNode } from 'react'
import { site } from '@/lib/site'
import styles from '@/styles.css?url'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: site.name },
    ],
    links: [{ rel: 'stylesheet', href: styles }],
  }),
  component: RootLayout,
  shellComponent: RootDocument,
  notFoundComponent: NotFound,
})

function RootLayout() {
  const pathname = useRouterState({ select: (state) => state.location.pathname })
  const chinese = pathname === '/zh' || pathname.startsWith('/zh/')
  const home = chinese ? '/zh' : '/'
  return (
    <div className="site-shell">
      <header className="site-header">
        <Link className="brand" to={home} aria-label={chinese ? 'ShipLean 首页' : 'ShipLean home'}>
          <span className="brand-cut" aria-hidden="true" />
          SHIPLEAN
        </Link>
        <nav aria-label={chinese ? '主导航' : 'Primary navigation'}>
          <a href={`${home}#workflow`}>{chinese ? '使用方式' : 'Workflow'}</a>
          <a href={`${home}#included`}>{chinese ? '包含内容' : 'Included'}</a>
          <a href={`${home}#pricing`}>{chinese ? '定价' : 'Pricing'}</a>
          <Link className="locale-link" to={chinese ? '/' : '/zh'}>
            {chinese ? 'EN' : '中文'}
          </Link>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="site-footer">
        <div className="brand footer-brand">
          <span className="brand-cut" aria-hidden="true" />
          SHIPLEAN
        </div>
        <p>{chinese ? '少一点脚手架，多一点产品。' : 'Less framework. More product.'}</p>
        <span>TanStack Start / Cloudflare-first</span>
      </footer>
    </div>
  )
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  const pathname = useRouterState({ select: (state) => state.location.pathname })
  const language = pathname === '/zh' || pathname.startsWith('/zh/') ? 'zh-CN' : 'en'
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: site.name,
    applicationCategory: 'DeveloperApplication',
    operatingSystem: 'Web',
    description: site.description,
  }
  return (
    <html lang={language}>
      <head>
        <HeadContent />
      </head>
      <body>
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
        {children}
        <Scripts />
      </body>
    </html>
  )
}

function NotFound() {
  return (
    <section className="not-found">
      <span>404 / CUT FROM SCOPE</span>
      <h1>This page did not make the MVP.</h1>
      <Link className="button button-dark" to="/">
        Return home
      </Link>
    </section>
  )
}
