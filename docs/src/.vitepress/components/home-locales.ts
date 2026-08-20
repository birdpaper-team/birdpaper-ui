export type HomeLocale = {
  headline: string;
  lead: string;
  ctaStart: string;
  ctaBrowse: string;
  stageAria: string;
  create: string;
  cancel: string;
  searchPlaceholder: string;
  messageSuccess: string;
  alertHint: string;
  calendarToday: string;
  weekdays: string[];
  principlesTitle: string;
  capsTitle: string;
  capsLead: string;
  codeTitle: string;
  codeLead: string;
  codeStepStyle: string;
  codeStepBuild: string;
  codeCta: string;
  codeOpenDialog: string;
  codeConfirmTitle: string;
  codeContent: string;
  exploreTitle: string;
  exploreLead: string;
  footerTagline: string;
  footerResources: string;
  footerCommunity: string;
  footerHelp: string;
  footerDesign: string;
  footerDevelop: string;
  footerComponents: string;
  footerQuickStart: string;
  footerGuide: string;
  footerChangelog: string;
  principles: Array<{
    title: string;
    en: string;
    slogan: string;
    desc: string;
  }>;
  capabilities: Array<{
    key: string;
    title: string;
    desc: string;
    link: string;
  }>;
  explores: Array<{
    label: string;
    title: string;
    desc: string;
    link: string;
  }>;
};

export const homeLocales: Record<"zh-CN" | "en", HomeLocale> = {
  "zh-CN": {
    headline: "为企业中后台而生的组件库",
    lead: "简洁、一致、高效。完整设计体系与高质量组件，帮助你更快构建可信赖的产品界面。",
    ctaStart: "快速开始",
    ctaBrowse: "浏览组件",
    stageAria: "组件预览",
    create: "创建",
    cancel: "取消",
    searchPlaceholder: "搜索关键词",
    messageSuccess: "操作成功",
    alertHint: "请完善必填项",
    calendarToday: "今天",
    weekdays: ["日", "一", "二", "三", "四", "五", "六"],
    principlesTitle: "设计原则",
    capsTitle: "为工程化而生",
    capsLead: "从设计令牌到组件实现，一条可落地的产品链路",
    codeTitle: "几行代码，即刻上手",
    codeLead: "统一的 API 与完整类型提示，降低学习与协作成本。",
    codeStepStyle: "引入样式与组件",
    codeStepBuild: "开始构建界面",
    codeCta: "查看文档",
    codeOpenDialog: "打开对话框",
    codeConfirmTitle: "确认操作",
    codeContent: "内容区域",
    exploreTitle: "从这里继续",
    exploreLead: "按角色进入对应文档，目标明确、路径清晰",
    footerTagline: "简洁、一致、高效的企业级 Vue 3 组件库",
    footerResources: "资源",
    footerCommunity: "社区",
    footerHelp: "帮助",
    footerDesign: "设计",
    footerDevelop: "开发",
    footerComponents: "组件",
    footerQuickStart: "快速上手",
    footerGuide: "样式指南",
    footerChangelog: "更新日志",
    principles: [
      {
        title: "简约",
        en: "Simple",
        slogan: "不做过多的设计，就是最好的设计。",
        desc: "尽可能的简化，剔除冗余元素，明确交互逻辑，在提升功能体验的同时大幅减少用户的操作成本。",
      },
      {
        title: "一致",
        en: "Agreed",
        slogan: "统一语言，减少使用门槛",
        desc: "视觉和交互的一致性是人机交互的基础。在颜色、样式、交互流程中保持高度的一致性，降低用户的上手成本。",
      },
      {
        title: "自然",
        en: "Naturally",
        slogan: "好的设计让人忘记设计的存在。",
        desc: "追求元素之间的自然协调，减少视觉冲击和理解成本，让界面运转符合用户的心理模型。",
      },
      {
        title: "生长",
        en: "Grow",
        slogan: "保持灵活，持续进化，适应不断变化的需求。",
        desc: "保持灵活、开放、不断生长，赋予组件更多能力，更好地适应复杂业务逻辑和交互场景。",
      },
    ],
    capabilities: [
      {
        key: "design-system",
        title: "设计体系",
        desc: "色彩、字号、圆角、阴影、动效与层级变量完整可复用",
        link: "/design/introduction",
      },
      {
        key: "dark",
        title: "深色模式",
        desc: "双套语义色与 CSS Variables，一键切换无需重写样式",
        link: "/design/dark",
      },
      {
        key: "typescript",
        title: "TypeScript",
        desc: "完整类型定义，编辑器提示友好，降低集成成本",
        link: "/develop/start",
      },
      {
        key: "theme",
        title: "主题定制",
        desc: "基于 CSS 变量覆盖品牌色与组件尺寸，适配你的产品气质",
        link: "/develop/theme",
      },
    ],
    explores: [
      {
        label: "设计",
        title: "理解视觉与原则",
        desc: "从色彩到深色模式，建立统一的设计语言。",
        link: "/design/introduction",
      },
      {
        label: "开发",
        title: "安装并快速集成",
        desc: "安装、主题与本地开发指南，马上开工。",
        link: "/develop/install",
      },
      {
        label: "组件",
        title: "查阅全部组件",
        desc: "表单、数据展示、反馈与布局，开箱即用。",
        link: "/components/catalog",
      },
    ],
  },
  en: {
    headline: "A component library for enterprise admin UIs",
    lead: "Simple, consistent, and efficient. A complete design system and high-quality components to help you ship trustworthy product interfaces faster.",
    ctaStart: "Get started",
    ctaBrowse: "Browse components",
    stageAria: "Component preview",
    create: "Create",
    cancel: "Cancel",
    searchPlaceholder: "Search keywords",
    messageSuccess: "Success",
    alertHint: "Complete required fields",
    calendarToday: "Today",
    weekdays: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    principlesTitle: "Design principles",
    capsTitle: "Built for engineering",
    capsLead: "From design tokens to components — a practical product delivery path",
    codeTitle: "A few lines to get started",
    codeLead: "Unified APIs and full type hints reduce learning and collaboration cost.",
    codeStepStyle: "Import styles and components",
    codeStepBuild: "Start building your UI",
    codeCta: "View docs",
    codeOpenDialog: "Open dialog",
    codeConfirmTitle: "Confirm action",
    codeContent: "Content area",
    exploreTitle: "Continue from here",
    exploreLead: "Jump into the docs that match your role — clear goals, clear paths",
    footerTagline: "A simple, consistent, efficient Vue 3 component library for enterprise",
    footerResources: "Resources",
    footerCommunity: "Community",
    footerHelp: "Help",
    footerDesign: "Design",
    footerDevelop: "Develop",
    footerComponents: "Components",
    footerQuickStart: "Quick start",
    footerGuide: "Style guide",
    footerChangelog: "Changelog",
    principles: [
      {
        title: "Simple",
        en: "Simple",
        slogan: "The best design is not over-designed.",
        desc: "Simplify ruthlessly. Remove noise, clarify interaction logic, and cut user effort while raising the quality of the experience.",
      },
      {
        title: "Agreed",
        en: "Agreed",
        slogan: "One language, lower barriers",
        desc: "Visual and interaction consistency is the foundation of HCI. Keep color, style, and flows aligned so users ramp up faster.",
      },
      {
        title: "Naturally",
        en: "Naturally",
        slogan: "Great design disappears into use.",
        desc: "Seek natural harmony between elements. Reduce visual friction and cognitive load so the UI matches how people think.",
      },
      {
        title: "Grow",
        en: "Grow",
        slogan: "Stay flexible and keep evolving.",
        desc: "Stay open and adaptable. Grow component capabilities so they fit complex business logic and changing scenarios.",
      },
    ],
    capabilities: [
      {
        key: "design-system",
        title: "Design system",
        desc: "Reusable tokens for color, type, radius, shadow, motion, and elevation",
        link: "/design/introduction",
      },
      {
        key: "dark",
        title: "Dark mode",
        desc: "Paired semantic colors and CSS variables — switch themes without rewriting styles",
        link: "/design/dark",
      },
      {
        key: "typescript",
        title: "TypeScript",
        desc: "Complete type definitions and editor hints that lower integration cost",
        link: "/develop/start",
      },
      {
        key: "theme",
        title: "Theming",
        desc: "Override brand colors and sizes with CSS variables to match your product",
        link: "/develop/theme",
      },
    ],
    explores: [
      {
        label: "Design",
        title: "Visuals and principles",
        desc: "From color to dark mode — build a shared design language.",
        link: "/design/introduction",
      },
      {
        label: "Develop",
        title: "Install and integrate",
        desc: "Install, theme, and local development — ready to ship.",
        link: "/develop/install",
      },
      {
        label: "Components",
        title: "Browse all components",
        desc: "Forms, data display, feedback, and layout — ready out of the box.",
        link: "/components/catalog",
      },
    ],
  },
};
