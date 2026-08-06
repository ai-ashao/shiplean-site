import { createFileRoute } from '@tanstack/react-router'
import { LandingPage } from '@/components/landing-page'
import { pageHead } from '@/lib/seo'

export const Route = createFileRoute('/')({
  head: () =>
    pageHead({
      title: 'Build the product, not the framework',
      description:
        'Download an Agent-ready TanStack Start SaaS scaffold and use its bundled Skill to build a focused, verified MVP.',
      path: '/',
      alternates: [
        { locale: 'en', path: '/' },
        { locale: 'zh-CN', path: '/zh' },
        { locale: 'x-default', path: '/' },
      ],
    }),
  component: () => <LandingPage locale="en" />,
})
