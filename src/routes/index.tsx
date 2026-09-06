import { createFileRoute } from '@tanstack/react-router'
import { LandingPage } from '@/components/landing-page'
import { pageHead } from '@/lib/seo'

export const Route = createFileRoute('/')({
  head: () =>
    pageHead({
      title: 'SEO-First Website Foundation for Coding Agents',
      description:
        'ShipLean is an Agent-ready TanStack Start foundation for SEO-first tool sites and SaaS acquisition pages, with explicit indexability and verification.',
      path: '/',
      alternates: [
        { locale: 'en', path: '/' },
        { locale: 'zh-CN', path: '/zh' },
        { locale: 'x-default', path: '/' },
      ],
    }),
  component: () => <LandingPage locale="en" />,
})
