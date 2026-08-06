import { Link } from '@tanstack/react-router'

const sectionIds = { workflow: 'workflow', included: 'included', pricing: 'pricing', faq: 'faq' }

const copy = {
  en: {
    eyebrow: 'AGENT-READY TANSTACK START SCAFFOLD',
    title: 'Build the product, not the framework.',
    lede: 'Download a lean SaaS foundation, open it in your coding agent, and invoke the bundled Skill. ShipLean gives the agent the architecture and verification contract before it writes your MVP.',
    primary: 'See the four-step workflow',
    secondary: 'View founding price',
    proof: ['TanStack Start only', 'Bundled Agent Skill', 'Cloudflare-first'],
    weightTitle: 'What the agent carries',
    keep: ['Routes and app shell', 'Project contracts', 'One verify command'],
    cut: ['Framework archaeology', 'Unused modules', 'Boilerplate tax'],
    workflowEyebrow: 'THE ACTUAL WORKFLOW',
    workflowTitle: 'From download to a reviewable MVP.',
    workflowText:
      'The template is delivered through a separate private repository. The public website never ships the commercial source.',
    steps: [
      ['Download', 'Get access to the private ShipLean template repository and clone it locally.'],
      [
        'Open Agent',
        'Open the repository in Codex, Claude Code, or another file-aware coding agent.',
      ],
      [
        'Invoke Skill',
        'Call $shiplean-quick-start and describe one user and the first job to complete.',
      ],
      [
        'Review',
        'The agent implements the scoped MVP and finishes with pnpm verify for you to review.',
      ],
    ],
    includedEyebrow: 'MVP BOUNDARY',
    includedTitle: 'Enough structure to move fast. Nothing pretending to be finished.',
    included: [
      ['Runtime', 'TanStack Start, React, TypeScript strict, Cloudflare Workers bundle.'],
      [
        'Product shell',
        'Public pages, local identity boundary, and a protected dashboard example.',
      ],
      [
        'Agent context',
        'Bundled Skill, AGENTS.md, architecture, task contracts, and acceptance rules.',
      ],
      ['Verification', 'Formatting, tests, production build, types, and fresh-server HTTP smoke.'],
    ],
    later: 'Phase two: production auth, PostgreSQL, payments, credits, email, and object storage.',
    priceEyebrow: 'FOUNDING BATCH',
    priceTitle: 'A starter priced for builders who ship more than once.',
    priceNote:
      'One commercial license for your own products, including 12 months of updates. The sale and private repository delivery are not open yet.',
    priceCta: 'Founding access opens soon',
    standard: '$99 standard price after the founding batch',
    faqTitle: 'Straight answers before you buy.',
    faqs: [
      [
        'Is ShipLean open source?',
        'The marketing site can be public. The commercial scaffold is delivered through a separate private repository.',
      ],
      [
        'Does it include payment code?',
        'Not in the first MVP. Payments, orders, webhooks, entitlements, and credits are phase-two modules.',
      ],
      [
        'Is it only for Claude Code?',
        'No. The repository uses portable project contracts. Skill discovery differs by tool, so any agent can be told to read the Skill file explicitly.',
      ],
      [
        'Does it support Next.js?',
        'No. ShipLean is intentionally TanStack Start–only and Cloudflare-first.',
      ],
    ],
  },
  zh: {
    eyebrow: '面向 AGENT 的 TANSTACK START 脚手架',
    title: '把时间花在产品上，不是框架上。',
    lede: '下载一套轻量 SaaS 底座，用编程 Agent 打开，再调用仓库内置 Skill。ShipLean 会在 Agent 写代码前，先交代架构、边界和验收方式。',
    primary: '查看四步使用流程',
    secondary: '查看创始定价',
    proof: ['只做 TanStack Start', '内置 Agent Skill', 'Cloudflare 优先'],
    weightTitle: 'Agent 真正需要携带的内容',
    keep: ['路由与应用外壳', '项目执行合同', '一条验证命令'],
    cut: ['框架考古', '用不到的模块', '脚手架溢价'],
    workflowEyebrow: '真实使用方式',
    workflowTitle: '从下载模板，到一个可以检查的 MVP。',
    workflowText: '模板通过独立私有仓库交付。公开官网不包含商业脚手架源码。',
    steps: [
      ['下载模板', '获得 ShipLean 私有模板仓库权限，并 clone 到本地工作区。'],
      ['打开 Agent', '使用 Codex、Claude Code 或其他能读取项目文件的编程 Agent 打开仓库。'],
      ['调用 Skill', '调用 $shiplean-quick-start，说明一个目标用户和第一个需要完成的任务。'],
      ['检查结果', 'Agent 在约束范围内实现 MVP，运行 pnpm verify，最后由你检查和部署。'],
    ],
    includedEyebrow: 'MVP 边界',
    includedTitle: '足够快速，又不冒充已经完成。',
    included: [
      ['运行环境', 'TanStack Start、React、TypeScript strict 和 Cloudflare Workers bundle。'],
      ['产品外壳', '公共页面、本地身份边界和受保护 Dashboard 示例。'],
      ['Agent 上下文', '内置 Skill、AGENTS.md、架构、任务合同和验收规则。'],
      ['完整验证', '代码规范、测试、生产构建、类型检查和新服务器 HTTP smoke。'],
    ],
    later: '第二期：生产 Auth、PostgreSQL、支付、credits、邮件和对象存储。',
    priceEyebrow: '创始批次',
    priceTitle: '给反复做产品的人，一个合理的脚手架价格。',
    priceNote: '一次商业授权，可用于自己的产品，并包含 12 个月更新。销售和私有仓库交付尚未开放。',
    priceCta: '创始批次即将开放',
    standard: '创始批次结束后标准价 $99',
    faqTitle: '购买前，把边界说清楚。',
    faqs: [
      ['ShipLean 会开源吗？', '公开官网可以开源，商业脚手架通过独立私有仓库交付。'],
      ['首版包含支付吗？', '不包含。支付、订单、webhook、权益和 credits 是第二期模块。'],
      [
        '只能使用 Claude Code 吗？',
        '不是。项目合同与工具无关；不同 Agent 的 Skill 发现能力不同，也可以明确要求它读取 Skill 文件。',
      ],
      [
        '支持 Next.js 吗？',
        '不支持。ShipLean 明确只做 TanStack Start，并以 Cloudflare 为首发目标。',
      ],
    ],
  },
} as const

export function LandingPage({ locale }: Readonly<{ locale: 'en' | 'zh' }>) {
  const text = copy[locale]
  return (
    <>
      <section className="hero section-pad">
        <div className="hero-copy">
          <p className="eyebrow">{text.eyebrow}</p>
          <h1>{text.title}</h1>
          <p className="hero-lede">{text.lede}</p>
          <div className="button-row">
            <a className="button button-dark" href={`#${sectionIds.workflow}`}>
              {text.primary} <span>↓</span>
            </a>
            <a className="button button-plain" href={`#${sectionIds.pricing}`}>
              {text.secondary}
            </a>
          </div>
          <ul className="proof-row">
            {text.proof.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <WeightManifest locale={locale} title={text.weightTitle} keep={text.keep} cut={text.cut} />
      </section>

      <section className="workflow section-pad" id={sectionIds.workflow}>
        <header className="section-heading">
          <div>
            <p className="eyebrow">{text.workflowEyebrow}</p>
            <h2>{text.workflowTitle}</h2>
          </div>
          <p>{text.workflowText}</p>
        </header>
        <ol className="workflow-grid">
          {text.steps.map(([title, body], index) => (
            <li key={title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </li>
          ))}
        </ol>
        <div className="skill-strip">
          <span>{locale === 'zh' ? '在编程 Agent 中调用' : 'INVOKE IN YOUR CODING AGENT'}</span>
          <code>$shiplean-quick-start</code>
        </div>
      </section>

      <section className="included section-pad" id={sectionIds.included}>
        <header className="included-heading">
          <p className="eyebrow">{text.includedEyebrow}</p>
          <h2>{text.includedTitle}</h2>
        </header>
        <div className="included-grid">
          {text.included.map(([title, body]) => (
            <article key={title}>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
        <p className="phase-note">
          <span>→</span> {text.later}
        </p>
      </section>

      <section className="pricing section-pad" id={sectionIds.pricing}>
        <div className="price-copy">
          <p className="eyebrow">{text.priceEyebrow}</p>
          <h2>{text.priceTitle}</h2>
          <p>{text.priceNote}</p>
        </div>
        <div className="price-ticket">
          <span>SHIPLEAN / FOUNDING</span>
          <strong>$66</strong>
          <p>{text.standard}</p>
          <span className="button button-disabled">{text.priceCta}</span>
        </div>
      </section>

      <section className="faq section-pad" id={sectionIds.faq}>
        <h2>{text.faqTitle}</h2>
        <div className="faq-list">
          {text.faqs.map(([question, answer]) => (
            <details key={question}>
              <summary>{question}</summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
        <Link className="back-top" to={locale === 'zh' ? '/zh' : '/'}>
          {locale === 'zh' ? '返回顶部 ↑' : 'Back to top ↑'}
        </Link>
      </section>
    </>
  )
}

function WeightManifest({
  locale,
  title,
  keep,
  cut,
}: Readonly<{
  locale: 'en' | 'zh'
  title: string
  keep: readonly string[]
  cut: readonly string[]
}>) {
  return (
    <aside className="weight-manifest" aria-label={title}>
      <div className="manifest-top">
        <span>{locale === 'zh' ? '减重清单' : 'LEAN MANIFEST'}</span>
        <span>REF / 0066</span>
      </div>
      <h2>{title}</h2>
      <div className="manifest-list keep-list">
        <span>KEEP</span>
        {keep.map((item) => (
          <p key={item}>{item}</p>
        ))}
      </div>
      <div className="cut-line" aria-hidden="true">
        <span>✂</span>
      </div>
      <div className="manifest-list cut-list">
        <span>CUT</span>
        {cut.map((item) => (
          <p key={item}>{item}</p>
        ))}
      </div>
    </aside>
  )
}
