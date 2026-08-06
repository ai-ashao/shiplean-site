import { describe, expect, it } from 'vitest'
import { absoluteUrl, parseSiteUrl } from '../src/lib/site'

describe('site contracts', () => {
  it('normalizes a configured site URL', () => {
    expect(parseSiteUrl('https://shiplean.dev/')).toBe('https://shiplean.dev')
    expect(parseSiteUrl('http://localhost:3000/')).toBe('http://localhost:3000')
  })

  it('rejects non-HTTP site URLs', () => {
    expect(() => parseSiteUrl('file:///tmp/shiplean')).toThrow(/HTTP/)
  })

  it('creates absolute public URLs', () => {
    expect(absoluteUrl('/zh')).toBe('https://shiplean.dev/zh')
  })
})
