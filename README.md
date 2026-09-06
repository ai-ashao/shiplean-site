# ShipLean Site

[简体中文](README.zh-CN.md)

Public bilingual website for **ShipLean**, an SEO-first TanStack Start website foundation built for coding agents.

ShipLean supports two product modes:

- **Tool Mode** — strict SEO-first workflow: research handoff → SEO Brief → page map → task-first Tool Landing → internal links → explicit indexability → verification.
- **SaaS Mode** — SEO-first public acquisition pages with product-first application surfaces.

This repository contains the public ShipLean website only. The reusable product foundation, Agent Skill, Tool/SaaS modes, SEO contracts, UI primitives, and verification tooling live in `ai-ashao/shiplean`.

## Local development

```bash
pnpm install
pnpm dev
```

## Verification

```bash
pnpm verify
```

The command checks formatting, tests, the Cloudflare Workers bundle, strict TypeScript, public metadata, security headers, bilingual routes, robots, sitemap, and the core SEO-first positioning rendered by the site.

## Product boundary

The website must describe ShipLean accurately:

- ShipLean is an SEO-first **website foundation**, not an SEO analytics SaaS.
- Keyword research, search-volume data, SERP scraping, competitor scoring, and ranking predictions stay outside the runtime.
- Tool Mode consumes research evidence through a typed SEO Brief before an indexable build is considered ready.
- SaaS Mode applies SEO-first rules to public acquisition surfaces without forcing keyword logic into the signed-in product.
- TanStack Start and Cloudflare remain the narrow supported runtime path.
