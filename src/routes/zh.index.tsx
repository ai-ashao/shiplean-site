import { createFileRoute } from '@tanstack/react-router'
import { LandingPage } from '@/components/landing-page'
import { pageHead } from '@/lib/seo'

export const Route = createFileRoute('/zh/')({
  head: () =>
    pageHead({
      title: '把时间花在产品上，不是框架上',
      description:
        '下载面向 Agent 的 TanStack Start SaaS 脚手架，调用内置 Skill，快速做出范围清晰、可以验证的 MVP。',
      path: '/zh',
      alternates: [
        { locale: 'en', path: '/' },
        { locale: 'zh-CN', path: '/zh' },
        { locale: 'x-default', path: '/' },
      ],
    }),
  component: () => <LandingPage locale="zh" />,
})
