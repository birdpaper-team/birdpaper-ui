# 简介

Birdpaper UI 是一套基于 Vue 3 的企业级中后台组件库，提供高质量的 UI 组件和完整的设计体系，帮助开发者快速构建一致、美观的 Web 应用。

## 设计理念

Birdpaper UI 遵循 **简洁、一致、高效** 的设计哲学：

- **简洁**：去除冗余装饰，让界面回归内容本身
- **一致**：统一的视觉语言和交互模式，降低用户认知成本
- **高效**：合理的信息层级和操作反馈，提升任务完成效率

## 设计体系

Birdpaper UI 的设计体系包含以下核心部分：

<script setup>
const systemData = [
  { area: '色彩', desc: '功能色 + 中性色，支持浅色/深色双模式' },
  { area: '字体', desc: '统一的字体族、字号和字重规范' },
  { area: '尺寸', desc: '4 级尺寸体系（mini / small / default / large）' },
  { area: '圆角', desc: '与尺寸联动的圆角规范' },
  { area: '阴影', desc: '分层级的阴影体系' },
  { area: '动效', desc: '统一的过渡时间和缓动函数' },
  { area: '层级', desc: '规范的 z-index 管理' },
]
</script>

<bp-table :data="systemData" row-key="area">
  <template #columns>
    <bp-table-column title="模块" data-index="area" />
    <bp-table-column title="说明" data-index="desc" />
  </template>
</bp-table>

## 技术特性

- **Vue 3**：基于 Composition API，支持 `<script setup>` 语法
- **TypeScript**：完整的类型定义，提供良好的开发体验
- **CSS Variables**：基于 CSS 自定义变量，支持主题定制和深色模式
- **Tree-shakable**：按需引入，减少打包体积
- **pnpm Monorepo**：组件、主题、文档分包管理
