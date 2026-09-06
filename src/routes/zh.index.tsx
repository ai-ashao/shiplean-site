import { createFileRoute } from '@tanstack/react-router'
import { LandingPage } from '@/components/landing-page'
import { pageHead } from '@/lib/seo'

export const Route = createFileRoute('/zh/')({
  head: () =>
    pageHead({
      title: '面向编程 Agent 的 SEO-first 建站底座',
      description:
        'ShipLean 是面向编程 Agent 的 SEO-first TanStack Start 建站底座，用于工具站和 SaaS 获客页，固化页面规划、内链、收录与验证契约。',
      path: '/zh',
      alternates: [
        { locale: 'en', path: '/' },
        { locale: 'zh-CN', path: '/zh' },
        { locale: 'x-default', path: '/' },
      ],
    }),
  component: () => <LandingPage locale="zh" />,
})
