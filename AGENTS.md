# ShipLean Site Agent Contract

## Product boundary

This repository is the public ShipLean marketing website. It must stay separate from the reusable `ai-ashao/shiplean` product foundation.

ShipLean's current positioning is:

> An SEO-first TanStack Start website foundation for coding agents, with strict Tool Mode and SEO-first SaaS acquisition surfaces.

## Rules

- Do not describe ShipLean as only a SaaS scaffold or generic boilerplate.
- Tool Mode is strict SEO-first: research evidence → SEO Brief → page map → implementation → internal links → explicit indexability → verification.
- SaaS Mode is SEO-first on public acquisition surfaces and product-first inside the signed-in application.
- Do not claim ShipLean performs keyword-volume research, KD scoring, SERP scraping, competitor scoring, ranking prediction, or guaranteed rankings.
- Do not reintroduce outdated founding pricing unless the actual commercial model is explicitly confirmed.
- Link the website to the public `ai-ashao/shiplean` repository.
- Keep all product claims aligned with implemented or explicitly bounded capabilities in the foundation repository.
- Preserve English/Chinese alternates, canonical URLs, sitemap, keyboard focus, reduced motion, and narrow-screen layout.
- Cloudflare Workers remains the only claimed first production target.

## Completion

Run `pnpm verify` before shipping.
