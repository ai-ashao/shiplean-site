# ShipLean Site

[English](README.md) | 简体中文

这是 **ShipLean** 的公开双语官网。ShipLean 现在的正式定位是：**面向编程 Agent 的 SEO-first TanStack Start 建站底座**。

ShipLean 支持两种产品模式：

- **Tool Mode**：严格 SEO-first，流程是研究结果交接 → SEO Brief → 页面地图 → Task-first Tool Landing → 内链 → 显式收录 → 验证。
- **SaaS Mode**：公开获客层 SEO-first，登录后的产品层保持 product-first。

## 仓库职责

- `shiplean-site`：ShipLean 官网，只负责定位、能力、工作流和产品边界的公开介绍。
- `shiplean`：可复用建站底座，包含 Tool / SaaS Modes、Agent Skill、SEO 契约、UI primitives 和验证链路。

官网不再把 ShipLean 描述为单纯的 SaaS boilerplate，也不再展示已经过时的创始定价与旧产品边界。

## 本地开发

```bash
pnpm install
pnpm dev
```

## 验证

```bash
pnpm verify
```

该命令检查格式、测试、Cloudflare Workers 构建、严格 TypeScript、双语页面、metadata、安全响应头、robots、sitemap，以及首页的 SEO-first / Tool Mode / SaaS Mode 核心定位。

## 产品边界

- ShipLean 是 SEO-first 建站底座，不是 SEO 分析 SaaS。
- 搜索量、KD、SERP 抓取、竞品评分和排名预测仍由外部研究工作流负责。
- Tool Mode 在可收录开发前必须消费有研究依据的 SEO Brief。
- SaaS Mode 只对公开获客层施加 SEO-first 规则，不用关键词逻辑扭曲 Dashboard、Workspace、Settings 等产品页面。
- 当前仍坚持 TanStack Start + Cloudflare-first 的窄技术路线。
