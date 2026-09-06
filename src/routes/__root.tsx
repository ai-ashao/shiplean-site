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
          <a href={`${home}#why-seo-first`} data-nav-secondary>
            {chinese ? 'SEO-first' : 'Why SEO-first'}
          </a>
          <a href={`${home}#modes`}>{chinese ? '模式' : 'Modes'}</a>
          <a href={`${home}#workflow`} data-nav-mobile-hide>
            {chinese ? '工作流' : 'Workflow'}
          </a>
          <a href={`${home}#contracts`} data-nav-secondary>
            {chinese ? '契约' : 'Contracts'}
          </a>
          <a className="github-link" href={site.githubUrl} rel="noreferrer" target="_blank">
            GitHub ↗
          </a>
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
        <p>
          {chinese
            ? 'SEO-first 建站底座 · Tool + SaaS · 面向编程 Agent'
            : 'SEO-first website foundation · Tool + SaaS · Built for coding agents'}
        </p>
        <span>TanStack Start / Cloudflare-first / pnpm verify</span>
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
    url: site.url,
    sameAs: [site.githubUrl],
    applicationCategory: 'DeveloperApplication',
    operatingSystem: 'Web',
    description: site.description,
    featureList: [
      'SEO-first Tool Mode',
      'SEO-first SaaS acquisition surfaces',
      'Tool SEO Brief contract',
      'Explicit indexability',
      'Internal-link graph verification',
      'Canonical and hreflang infrastructure',
      'TanStack Start and Cloudflare-first runtime',
    ],
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
      <span>404 / OUTSIDE THE PAGE MAP</span>
      <h1>This route is not part of the public site.</h1>
      <Link className="button button-dark" to="/">
        Return home
      </Link>
    </section>
  )
}
