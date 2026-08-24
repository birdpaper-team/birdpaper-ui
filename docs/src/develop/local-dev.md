# 本地开发

本文介绍如何在本地跑通 Birdpaper UI 仓库：启动文档站、开发组件、跑测试与本地联调。

## 环境要求

- **Node.js** ≥ 18（CI 使用 Node 20）
- **pnpm** 8（仓库 `packageManager` 为 `pnpm@8.10.4`）

建议使用 Corepack 启用指定 pnpm：

```bash
corepack enable
corepack prepare pnpm@8.10.4 --activate
```

## 克隆与安装

```bash
git clone https://github.com/birdpaper-team/birdpaper-ui.git
cd birdpaper-ui
pnpm install
```

本仓库是 pnpm monorepo，主要包：

<script setup>
const packageData = [
  { path: 'packages/components', desc: '组件源码与单测' },
  { path: 'packages/theme', desc: '主题 SCSS / CSS 变量' },
  { path: 'packages/hooks', desc: '公共 hooks' },
  { path: 'packages/birdpaper-ui', desc: '对外入口与安装器' },
  { path: 'docs', desc: 'VitePress 文档站' },
]

const commandData = [
  { command: 'pnpm docs:dev', desc: '启动文档开发服务' },
  { command: 'pnpm test', desc: '运行 Vitest' },
  { command: 'pnpm vitest:ui', desc: 'Vitest UI' },
  { command: 'pnpm lint', desc: 'oxlint 检查' },
  { command: 'pnpm build', desc: '清理并构建产物到 dist/' },
  { command: 'pnpm yalc', desc: '构建后通过 yalc 推送到本地联调' },
  { command: 'pnpm cz', desc: '交互式规范提交（czg emoji）' },
  { command: 'pnpm clean', desc: '清理构建缓存 / dist' },
]
</script>

<bp-table :data="packageData" row-key="path">
  <template #columns>
    <bp-table-column title="路径" data-index="path" />
    <bp-table-column title="说明" data-index="desc" />
  </template>
</bp-table>

## 启动文档站

日常开发以文档站为预览环境（组件通过 workspace 直接引用源码）：

```bash
pnpm docs:dev
```

默认地址：`http://localhost:7070/`。

修改 `packages/components` 或 `packages/theme` 后，文档页一般会热更新。若样式未刷新，重启 `docs:dev`。

其他文档命令：

```bash
pnpm docs:build        # 构建（base: /birdpaper-ui/）
pnpm docs:build:root   # 构建（base: /）
pnpm docs:preview      # 预览构建产物（默认 8080）
```

## 目录与开发约定

以 Button 为例，组件目录大致如下：

```text
packages/components/button/
├── index.ts                 # 导出
├── src/
│   ├── button.vue           # 组件实现
│   ├── props.ts
│   └── types.ts
├── style/index.ts           # 引入主题样式
└── __tests__/button.test.ts
```

对应主题样式：

```text
packages/theme/src/button.scss
```

文档与示例：

```text
docs/src/components/button/
├── index.md                 # 组件页
├── demo.md                  # 演示说明
└── api.md                   # API
docs/src/example/button/
├── basic.vue
└── ...
```

新增组件时通常需要同步：

1. 在 `packages/components/<name>/` 实现组件并导出
2. 在 `packages/components/index.ts` 增加导出
3. 在 `packages/birdpaper-ui/components.ts`（及插件类如有）注册
4. 在 `packages/theme/src/` 增加样式，并写入 `packages/theme/src/index.scss`
5. 在 `docs/src/components/`、`docs/src/example/` 补充文档与示例
6. 在侧边栏 `docs/src/.vitepress/config/locales/zh-CN/sidebar.ts`（及英文侧栏若有）登记

## 常用命令

<bp-table :data="commandData" row-key="command">
  <template #columns>
    <bp-table-column title="命令" data-index="command" />
    <bp-table-column title="作用" data-index="desc" />
  </template>
</bp-table>

跑单个组件测试示例：

```bash
pnpm test packages/components/button
# 或
pnpm exec vitest run packages/components/button
```

## 本地联调业务项目

需要在真实业务仓库验证未发布改动时，可用 yalc：

```bash
# 在 birdpaper-ui 仓库
pnpm yalc

# 在业务项目
yalc add birdpaper-ui
# 按需重启业务 dev server
```

更新组件后再次执行 `pnpm yalc` 推送。联调结束可在业务项目执行 `yalc remove birdpaper-ui` 并恢复 npm 依赖。

也可使用 `pnpm link` / workspace protocol，按团队习惯选择即可。

## 构建产物

```bash
pnpm build
```

产物输出到 `dist/birdpaper-ui`（含组件包与 `theme/*.css`）。版本变更见 [更新日志](/develop/changelog/)。

## 调试建议

- **优先在文档示例中复现**：改 `docs/src/example/**` 最快验证交互与样式
- **样式问题**：确认是否改到了 `packages/theme`，以及是否已在 `index.scss` 引入
- **类型问题**：组件 `props` / `types` 与文档 `api.md` 保持一致
- **深色模式**：文档站可切换外观；主题变量规则见 [定制主题](/develop/theme/) 与 [深色模式](/design/dark/)

## 下一步

- [参与贡献](/develop/pr/) — Issue / PR 流程与提交规范
- [定制主题](/develop/theme/) — CSS 变量与主题覆盖
- [更新日志](/develop/changelog/) — 版本变更记录
