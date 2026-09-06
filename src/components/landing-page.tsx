import { site } from '@/lib/site'

const sectionIds = {
  top: 'top',
  why: 'why-seo-first',
  modes: 'modes',
  workflow: 'workflow',
  contracts: 'contracts',
  faq: 'faq',
} as const

const copy = {
  en: {
    eyebrow: 'SEO-FIRST · AGENT-READY · TANSTACK START',
    title: 'The SEO-first website foundation for coding agents.',
    lede: 'ShipLean turns search evidence into a page map, then gives your coding agent the contracts to build, link, index, and verify the site. Tool Mode is strict SEO-first; SaaS Mode keeps acquisition pages SEO-first while the app stays product-first.',
    primary: 'View ShipLean on GitHub',
    secondary: 'Explore product modes',
    proof: [
      'Tool Mode: strict SEO-first',
      'SaaS: SEO-first acquisition layer',
      'TanStack Start + Cloudflare',
      'One pnpm verify contract',
    ],
    pipelineLabel: 'SEARCH → SHIP CONTRACT',
    pipelineTitle: 'Search intent becomes implementation constraints.',
    pipelineNote: 'Research happens outside ShipLean. The handoff does not.',
    pipeline: [
      ['01', 'Research evidence', 'Bring keyword and SERP evidence from your research workflow.'],
      ['02', 'SEO brief', 'Freeze the primary keyword, intent, locales, and first-batch page map.'],
      ['03', 'Build', 'Invoke the bundled Skill and let the repository contracts guide the Agent.'],
      [
        '04',
        'Link + index',
        'Make internal links crawlable and indexability explicit instead of accidental.',
      ],
      [
        '05',
        'Verify',
        'Check metadata, sitemap, hreflang, link graph, viewport, and runtime together.',
      ],
    ],
    whyEyebrow: 'WHY SEO-FIRST',
    whyTitle: 'Route decisions happen before visual polish.',
    whyText:
      'Most boilerplates start with auth, billing, dashboards, and component inventory. ShipLean starts by asking which public pages deserve to exist and which of those pages deserve to be indexed.',
    principles: [
      [
        'Search intent → page map',
        'Tool Mode consumes a research-backed SEO Brief before an indexable build is considered ready.',
        '01',
      ],
      [
        'Indexability is earned',
        'A working feature is not automatically an SEO page. Live Tool routes enter sitemap only after explicit indexability.',
        '02',
      ],
      [
        'Internal links are a contract',
        'Broken links, indexable orphan pages, and pages unreachable from the homepage are verification failures.',
        '03',
      ],
      [
        'Technical SEO must render',
        'Canonical, hreflang, metadata, robots, sitemap, and structured data are checked against real server output.',
        '04',
      ],
    ],
    modesEyebrow: 'TWO PRODUCT MODES',
    modesTitle: 'One Core. Two different SEO boundaries.',
    toolMode: {
      badge: 'TOOL MODE',
      title: 'SEO-first is the product strategy.',
      body: 'For downloaders, converters, generators, viewers, compressors, calculators, and other search-led utilities.',
      flow: [
        'Keyword / SERP evidence',
        'Tool SEO Brief',
        'First-batch page map',
        'Task-first Tool Landing',
        'Internal links + explicit indexability',
        'Verify',
      ],
      foot: 'The tool works for the query. The site architecture works for discovery.',
    },
    saasMode: {
      badge: 'SAAS MODE',
      title: 'SEO-first acquisition. Product-first application.',
      body: 'For SaaS where public pages acquire demand, but dashboard, settings, account, and workspace surfaces should not be distorted by keyword logic.',
      acquisition: 'PUBLIC ACQUISITION',
      acquisitionItems: ['Landing', 'Features', 'Solutions', 'Use cases', 'Guides', 'Pricing'],
      app: 'PRODUCT SURFACE',
      appItems: ['App', 'Dashboard', 'Workspace', 'Settings', 'Account'],
      foot: 'Search shapes the public funnel. Product logic shapes the signed-in experience.',
    },
    workflowEyebrow: 'AGENT WORKFLOW',
    workflowTitle: 'Research outside. Contracts inside. Evidence at the end.',
    workflowText:
      'ShipLean does not pretend to be Semrush, Ahrefs, or a SERP crawler. It takes the decisions from research and turns them into a repeatable build contract for Codex, Claude Code, or another file-aware coding agent.',
    steps: [
      [
        'Bring evidence',
        'Start with a keyword/SERP decision from the user or an external research skill. Never fabricate search demand.',
      ],
      [
        'Freeze the brief',
        'Define primary keyword, search intent, first-batch pages, locales, and evidence before Tool Mode implementation.',
      ],
      [
        'Invoke the Skill',
        'Call $shiplean-quick-start. The Agent reads project contracts before editing routes and product code.',
      ],
      [
        'Build the public surface',
        'Use the mode-specific landing, routing, navigation, Tool Registry, metadata, and content contracts.',
      ],
      [
        'Run the evidence gate',
        'pnpm verify checks code, build, SSR metadata, link graph, security, and browser acceptance together.',
      ],
    ],
    skillLabel: 'INVOKE IN YOUR CODING AGENT',
    contractsEyebrow: 'WHAT THE FOUNDATION ENFORCES',
    contractsTitle: 'The useful parts are contracts, not a pile of integrations.',
    contracts: [
      [
        'SEO infrastructure',
        'Canonical URLs, hreflang, robots, sitemap, metadata, structured data, multilingual intent review, and SSR acceptance.',
        [
          'Canonical + hreflang',
          'Sitemap + robots',
          'Structured metadata',
          'Explicit indexability',
        ],
      ],
      [
        'Site architecture',
        'Tool Registry, relevant Related Tools, internal-link reachability, category-hub guidance, and shallow crawl depth.',
        [
          'Tool Registry',
          'No orphan indexable pages',
          'Relevant internal links',
          'Click-depth warnings',
        ],
      ],
      [
        'Task-first Tool UX',
        'The primary task stays above the fold with truthful access signals, constraints, completion highlights, and useful guidance.',
        [
          'Primary task first',
          'Truthful value signals',
          'Visible constraints',
          '1440×900 + 390×844 QA',
        ],
      ],
      [
        'Agent + engineering',
        'TanStack Start, Cloudflare-first runtime, strict TypeScript, project contracts, UI primitives, security headers, and one verification command.',
        ['TanStack Start', 'Cloudflare-first', 'Strict TypeScript', 'pnpm verify'],
      ],
    ],
    boundaryEyebrow: 'DELIBERATE BOUNDARY',
    boundaryTitle: 'ShipLean is not another SEO SaaS.',
    boundaryText:
      'It does not need to own every SEO job. Keeping research outside the runtime makes the foundation smaller, cheaper to adapt, and harder for an Agent to misuse.',
    does: 'SHIPLEAN OWNS',
    doesItems: [
      'Research handoff contract',
      'Page and route architecture',
      'On-page / technical SEO infrastructure',
      'Internal-link and indexability gates',
      'Mode-specific public surfaces',
      'Repository-wide verification',
    ],
    doesNot: 'RESEARCH LAYER OWNS',
    doesNotItems: [
      'Search volume and KD APIs',
      'SERP scraping',
      'Competitor scoring',
      'Ranking predictions',
      'Automatic 1,000-page generation',
      'Fake SEO scores',
    ],
    faqTitle: 'Questions before you build with it.',
    faqs: [
      [
        'Is ShipLean an SEO tool?',
        'No. ShipLean is a website foundation that encodes SEO-first build rules. Keyword research and SERP analysis remain separate inputs.',
      ],
      [
        'Is ShipLean only for tool sites?',
        'No. Tool Mode is the strict SEO-first path. SaaS Mode applies SEO-first thinking to public acquisition pages while keeping the application product-first.',
      ],
      [
        'Does ShipLean guarantee rankings?',
        'No. It removes avoidable architecture and implementation mistakes. Rankings still depend on demand, competition, usefulness, authority, and many external factors.',
      ],
      [
        'Why TanStack Start only?',
        'A narrow runtime is easier for coding agents to understand and easier to verify repeatedly. ShipLean deliberately avoids multi-framework abstraction.',
      ],
      [
        'What does pnpm verify actually protect?',
        'It combines code quality, tests, production build, strict types, server-rendered SEO checks, internal-link acceptance, security checks, and browser QA.',
      ],
    ],
    finalEyebrow: 'BUILD THE SITE, NOT THE SEO DEBT',
    finalTitle: 'Give your coding agent a search-aware starting point.',
    finalBody:
      'Use ShipLean as the reusable foundation, bring real search evidence, and let the repository contracts keep the build aligned from page map to final verification.',
    finalPrimary: 'Open the ShipLean repository',
    finalSecondary: 'Back to top',
  },
  zh: {
    eyebrow: 'SEO-FIRST · 面向 AGENT · TANSTACK START',
    title: '给编程 Agent 用的 SEO-first 建站底座。',
    lede: 'ShipLean 把关键词与 SERP 研究结果接成页面地图，再用仓库契约约束 Agent 完成建页、内链、收录与验证。Tool Mode 严格 SEO-first；SaaS Mode 让公开获客层 SEO-first，而登录后的产品层保持 product-first。',
    primary: '在 GitHub 查看 ShipLean',
    secondary: '查看两种产品模式',
    proof: [
      'Tool Mode：严格 SEO-first',
      'SaaS：SEO-first 获客层',
      'TanStack Start + Cloudflare',
      '一条 pnpm verify 契约',
    ],
    pipelineLabel: 'SEARCH → SHIP 契约',
    pipelineTitle: '把搜索意图变成实现约束。',
    pipelineNote: '研究发生在 ShipLean 外部，但研究结果的交接不会丢。',
    pipeline: [
      ['01', '研究证据', '从已有 SEO 工作流带入关键词与 SERP 证据。'],
      ['02', 'SEO Brief', '冻结主关键词、搜索意图、语言与首批页面地图。'],
      ['03', '开发', '调用内置 Skill，让 Agent 先读项目契约再修改代码。'],
      ['04', '内链与收录', '内部链接必须可抓取，页面是否收录必须显式决定。'],
      ['05', '验证', '一次检查 metadata、sitemap、hreflang、内链图、首屏和运行时。'],
    ],
    whyEyebrow: '为什么是 SEO-FIRST',
    whyTitle: '先决定该建哪些页面，再决定页面长什么样。',
    whyText:
      '多数 boilerplate 从 Auth、支付、Dashboard 和组件清单开始。ShipLean 先问：哪些公开页面值得存在，其中哪些页面已经有资格被搜索引擎收录？',
    principles: [
      [
        '搜索意图 → 页面地图',
        'Tool Mode 在可收录开发开始前，必须先消费有研究依据的 SEO Brief。',
        '01',
      ],
      [
        '收录资格要明确',
        '功能能用不等于 SEO 页面完成。Tool 路由只有显式 indexable 才进入 sitemap。',
        '02',
      ],
      ['内链也是契约', '坏链、可收录孤儿页、从首页无法到达的页面都会让验证失败。', '03'],
      [
        'Technical SEO 必须真实渲染',
        'Canonical、hreflang、metadata、robots、sitemap 和结构化数据检查最终 SSR 输出。',
        '04',
      ],
    ],
    modesEyebrow: '两种产品模式',
    modesTitle: '一套 Core，两种不同的 SEO 边界。',
    toolMode: {
      badge: 'TOOL MODE',
      title: 'SEO-first 本身就是产品策略。',
      body: '适合下载器、转换器、生成器、查看器、压缩器、计算器等主要依赖搜索获客的工具站。',
      flow: [
        '关键词 / SERP 证据',
        'Tool SEO Brief',
        '首批页面地图',
        'Task-first Tool Landing',
        '内链 + 显式收录',
        'Verify',
      ],
      foot: '工具负责满足查询，网站架构负责让搜索引擎发现和理解。',
    },
    saasMode: {
      badge: 'SAAS MODE',
      title: '获客层 SEO-first，产品层 Product-first。',
      body: '适合公开页面负责获客，而 Dashboard、Settings、Account、Workspace 不应该被关键词逻辑绑架的 SaaS。',
      acquisition: '公开获客层',
      acquisitionItems: ['Landing', 'Features', 'Solutions', 'Use Cases', 'Guides', 'Pricing'],
      app: '产品层',
      appItems: ['App', 'Dashboard', 'Workspace', 'Settings', 'Account'],
      foot: '搜索决定公开漏斗，产品逻辑决定登录后的体验。',
    },
    workflowEyebrow: 'AGENT 工作流',
    workflowTitle: '研究在外部完成，契约在仓库里执行，最后用证据验收。',
    workflowText:
      'ShipLean 不假装自己是 Semrush、Ahrefs 或 SERP 抓取器。它负责把研究阶段已经做出的决定，变成 Codex、Claude Code 或其他文件型编码 Agent 可以反复执行的建站契约。',
    steps: [
      ['带入证据', '从用户或外部 SEO Skill 获取关键词 / SERP 结论，不虚构搜索量与需求。'],
      ['冻结 Brief', 'Tool Mode 先确定主关键词、搜索意图、首批页面、语言与研究证据。'],
      ['调用 Skill', '调用 $shiplean-quick-start；Agent 修改路由和产品代码前先读取项目契约。'],
      ['构建公开页面', '按照模式使用 Landing、路由、导航、Tool Registry、metadata 和内容契约。'],
      ['跑完整验收', 'pnpm verify 一次检查代码、构建、SSR SEO、内链图、安全和真实浏览器结果。'],
    ],
    skillLabel: '在编程 AGENT 中调用',
    contractsEyebrow: '底座真正固化的能力',
    contractsTitle: '核心价值是契约，不是堆一堆集成。',
    contracts: [
      [
        'SEO 基础设施',
        'Canonical、hreflang、robots、sitemap、metadata、结构化数据、多语言意图复核与 SSR 验收。',
        ['Canonical + hreflang', 'Sitemap + robots', '结构化 Metadata', '显式 Indexability'],
      ],
      [
        '站内架构',
        'Tool Registry、相关 Related Tools、内链可达性、Category Hub 规则与浅层点击深度。',
        ['Tool Registry', '无可收录孤儿页', '相关内部链接', '点击深度警告'],
      ],
      [
        'Task-first 工具体验',
        '核心任务保持在首屏，并展示真实的使用条件、限制、完成能力和有用指引。',
        ['核心任务优先', '真实 Value Signals', '限制前置', '1440×900 + 390×844 QA'],
      ],
      [
        'Agent + 工程',
        'TanStack Start、Cloudflare-first、严格 TypeScript、项目契约、UI primitives、安全响应头与一条验证命令。',
        ['TanStack Start', 'Cloudflare-first', 'Strict TypeScript', 'pnpm verify'],
      ],
    ],
    boundaryEyebrow: '刻意保持的边界',
    boundaryTitle: 'ShipLean 不是另一个 SEO SaaS。',
    boundaryText:
      '它不需要把所有 SEO 工作都塞进运行时。研究留在外部，建站约束留在底座里，反而更轻、更便宜，也更不容易让 Agent 误用。',
    does: 'SHIPLEAN 负责',
    doesItems: [
      '研究结果交接契约',
      '页面与路由架构',
      'On-page / Technical SEO 基础',
      '内链与收录门禁',
      'Tool / SaaS 两套公开页面',
      '仓库级完整验收',
    ],
    doesNot: '研究层负责',
    doesNotItems: [
      '搜索量与 KD API',
      'SERP 抓取',
      '竞品评分',
      '排名预测',
      '自动生成 1000 个页面',
      '虚假的 SEO 总分',
    ],
    faqTitle: '开始使用前，把边界说清楚。',
    faqs: [
      [
        'ShipLean 是 SEO 工具吗？',
        '不是。ShipLean 是把 SEO-first 建站规则固化进代码和工作流的底座。关键词研究和 SERP 分析仍然是外部输入。',
      ],
      [
        'ShipLean 只适合工具站吗？',
        '不是。Tool Mode 是严格 SEO-first 路线；SaaS Mode 对公开获客页面使用 SEO-first，对登录后的应用保持 product-first。',
      ],
      [
        'ShipLean 能保证排名吗？',
        '不能。它负责减少可避免的架构和实现错误，实际排名仍取决于需求、竞争、页面价值、权威度等外部因素。',
      ],
      [
        '为什么只做 TanStack Start？',
        '运行时越窄，编码 Agent 越容易理解，验证也更可靠。ShipLean 不做多框架抽象。',
      ],
      [
        'pnpm verify 到底检查什么？',
        '代码质量、测试、生产构建、严格类型、SSR SEO、内链、安全响应头和真实浏览器 QA 会在同一条验收链中执行。',
      ],
    ],
    finalEyebrow: '先消灭 SEO 债务，再上线',
    finalTitle: '给编程 Agent 一个懂搜索的起点。',
    finalBody:
      '把 ShipLean 当作可复用底座，带入真实搜索证据，让仓库契约从页面地图一路约束到最终验收。',
    finalPrimary: '打开 ShipLean 仓库',
    finalSecondary: '返回顶部',
  },
} as const

export function LandingPage({ locale }: Readonly<{ locale: 'en' | 'zh' }>) {
  const text = copy[locale]

  return (
    <>
      <section className="hero section-pad" id={sectionIds.top}>
        <div className="hero-copy">
          <p className="eyebrow">{text.eyebrow}</p>
          <h1>{text.title}</h1>
          <p className="hero-lede">{text.lede}</p>
          <div className="button-row">
            <a
              className="button button-dark"
              href={site.githubUrl}
              rel="noreferrer"
              target="_blank"
            >
              {text.primary} <span>↗</span>
            </a>
            <a className="button button-plain" href={`#${sectionIds.modes}`}>
              {text.secondary} <span>↓</span>
            </a>
          </div>
          <ul className="proof-row">
            {text.proof.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <aside className="pipeline-panel" aria-label={text.pipelineTitle}>
          <div className="panel-topline">
            <span>{text.pipelineLabel}</span>
            <span>V0.3 / SEO-FIRST</span>
          </div>
          <h2>{text.pipelineTitle}</h2>
          <p className="pipeline-note">{text.pipelineNote}</p>
          <ol className="pipeline-list">
            {text.pipeline.map(([number, title, body]) => (
              <li key={number}>
                <span>{number}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </div>
              </li>
            ))}
          </ol>
        </aside>
      </section>

      <section className="principles section-pad" id={sectionIds.why}>
        <header className="section-heading section-heading-dark">
          <div>
            <p className="eyebrow">{text.whyEyebrow}</p>
            <h2>{text.whyTitle}</h2>
          </div>
          <p>{text.whyText}</p>
        </header>
        <div className="principle-grid">
          {text.principles.map(([title, body, number]) => (
            <article key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="modes section-pad" id={sectionIds.modes}>
        <header className="section-heading">
          <div>
            <p className="eyebrow">{text.modesEyebrow}</p>
            <h2>{text.modesTitle}</h2>
          </div>
        </header>

        <div className="mode-grid">
          <article className="mode-card mode-tool">
            <span className="mode-badge">{text.toolMode.badge}</span>
            <h3>{text.toolMode.title}</h3>
            <p className="mode-body">{text.toolMode.body}</p>
            <ol className="mode-flow">
              {text.toolMode.flow.map((item, index) => (
                <li key={item}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <strong>{item}</strong>
                </li>
              ))}
            </ol>
            <p className="mode-foot">{text.toolMode.foot}</p>
          </article>

          <article className="mode-card mode-saas">
            <span className="mode-badge">{text.saasMode.badge}</span>
            <h3>{text.saasMode.title}</h3>
            <p className="mode-body">{text.saasMode.body}</p>
            <div className="surface-map">
              <div>
                <span>{text.saasMode.acquisition}</span>
                <ul>
                  {text.saasMode.acquisitionItems.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <span>{text.saasMode.app}</span>
                <ul>
                  {text.saasMode.appItems.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="mode-foot">{text.saasMode.foot}</p>
          </article>
        </div>
      </section>

      <section className="workflow section-pad" id={sectionIds.workflow}>
        <header className="section-heading section-heading-dark">
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
          <span>{text.skillLabel}</span>
          <code>$shiplean-quick-start</code>
        </div>
      </section>

      <section className="contracts section-pad" id={sectionIds.contracts}>
        <header className="section-heading">
          <div>
            <p className="eyebrow">{text.contractsEyebrow}</p>
            <h2>{text.contractsTitle}</h2>
          </div>
        </header>
        <div className="contract-grid">
          {text.contracts.map(([title, body, items]) => (
            <article key={title}>
              <h3>{title}</h3>
              <p>{body}</p>
              <ul>
                {items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="boundary section-pad">
        <header className="boundary-heading">
          <p className="eyebrow">{text.boundaryEyebrow}</p>
          <h2>{text.boundaryTitle}</h2>
          <p>{text.boundaryText}</p>
        </header>
        <div className="boundary-grid">
          <div>
            <span>{text.does}</span>
            <ul>
              {text.doesItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <span>{text.doesNot}</span>
            <ul>
              {text.doesNotItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
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
      </section>

      <section className="final-cta section-pad">
        <p className="eyebrow">{text.finalEyebrow}</p>
        <h2>{text.finalTitle}</h2>
        <p>{text.finalBody}</p>
        <div className="button-row final-buttons">
          <a className="button button-dark" href={site.githubUrl} rel="noreferrer" target="_blank">
            {text.finalPrimary} <span>↗</span>
          </a>
          <a className="button button-plain" href={`#${sectionIds.top}`}>
            {text.finalSecondary} <span>↑</span>
          </a>
        </div>
      </section>
    </>
  )
}
