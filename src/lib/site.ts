export function parseSiteUrl(value?: string) {
  const raw = value?.trim() || 'https://shiplean.dev'
  const url = new URL(raw)
  if (!['http:', 'https:'].includes(url.protocol))
    throw new Error('VITE_SITE_URL must use HTTP(S).')
  return url.toString().replace(/\/$/, '')
}

export const site = {
  name: 'ShipLean',
  url: parseSiteUrl(import.meta.env.VITE_SITE_URL),
  description:
    'An Agent-ready TanStack Start SaaS scaffold for building a focused MVP without boilerplate weight.',
}

export function absoluteUrl(path = '/') {
  return new URL(path, site.url).toString()
}
