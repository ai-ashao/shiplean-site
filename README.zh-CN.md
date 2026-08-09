# ShipLean Site

[English](README.md) | 简体中文

这是 ShipLean 的公开双语营销网站。ShipLean 是一套面向编码 Agent 的 TanStack Start SaaS 脚手架，用来把聚焦的产品想法转化为可验证的 MVP。

## 仓库职责

本仓库只包含公开营销网站，不包含也不分发商业脚手架源码。两个仓库的职责分别是：

- `shiplean-site`：公开介绍产品定位、使用流程、价格与文档入口。
- `shiplean`：私有商业模板、内置 Skill、示例模块与验证工具。

网站对外描述的标准流程是：下载模板 → 用编码 Agent 打开 → 调用内置 Skill → 审核经过验证的 MVP。

## 本地开发

```bash
pnpm install
pnpm dev
```

## 验证

```bash
pnpm verify
```

该命令会检查：

- 格式与代码规范
- 测试和严格 TypeScript
- Cloudflare Workers 构建
- 英文与中文路由
- metadata、安全响应头、robots 和 sitemap

## 产品边界

- 本仓库不应包含商业模板源码。
- 生产托管目标只声明 Cloudflare Workers。
- 支付、生产 Auth、数据库、邮件和对象存储属于脚手架第二阶段能力；在实际实现前不会作为现成功能宣传。
