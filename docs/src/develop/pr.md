# 参与贡献

感谢关注 Birdpaper UI。欢迎通过 Issue、讨论和 Pull Request 一起完善组件库。提交前请先阅读 [本地开发](/develop/local-dev/)，确保能在本地跑通文档与测试。

## 贡献方式

- **报告缺陷**：说明复现步骤、期望行为、实际行为，附上版本、浏览器与最小复现（可用文档站示例或 CodeSandbox）
- **功能建议**：描述使用场景与动机，尽量给出 API / 交互草图
- **文档改进**：错别字、示例、翻译、过时说明都欢迎
- **代码贡献**：修 bug、补测试、新组件或增强现有组件

仓库地址：[birdpaper-team/birdpaper-ui](https://github.com/birdpaper-team/birdpaper-ui)（当前主开发分支：**`v3`**）。

## 开始之前

1. 搜索是否已有相关 Issue / PR，避免重复劳动
2. 较大改动（新组件、破坏性变更）建议先开 Issue 讨论
3. Fork 仓库并基于最新 `v3` 建分支：

```bash
git checkout v3
git pull
git checkout -b feat/your-topic
```

## 开发检查清单

提交 PR 前建议完成：

<script setup>
import { ref } from 'vue'

const checklist = ref([])

const commitTypeData = [
  { type: 'feat', desc: '新功能' },
  { type: 'fix', desc: '缺陷修复' },
  { type: 'docs', desc: '仅文档' },
  { type: 'style', desc: '不影响逻辑的格式 / 样式微调' },
  { type: 'refactor', desc: '重构（非 feat / fix）' },
  { type: 'perf', desc: '性能' },
  { type: 'test', desc: '测试' },
  { type: 'build', desc: '构建或依赖' },
  { type: 'ci', desc: 'CI 配置' },
  { type: 'chore', desc: '杂项' },
  { type: 'revert', desc: '回滚' },
]
</script>

<bp-checkbox-group v-model="checklist" direction="vertical">
  <bp-checkbox value="docs"><code>pnpm docs:dev</code> 下相关文档 / Demo 表现正常</bp-checkbox>
  <bp-checkbox value="test">涉及组件已补充或更新单元测试，<code>pnpm test</code> 通过</bp-checkbox>
  <bp-checkbox value="lint"><code>pnpm lint</code> 无新增报错</bp-checkbox>
  <bp-checkbox value="api">若有公开 API 变更，已更新对应 <code>docs/src/components/**/api.md</code> 与示例</bp-checkbox>
  <bp-checkbox value="theme">
    若有视觉令牌 / 深色相关改动，已核对
    <a href="/develop/theme/">定制主题</a>
    与
    <a href="/design/dark/">深色模式</a>
    描述是否一致
  </bp-checkbox>
</bp-checkbox-group>

## 提交信息

仓库使用 [Conventional Commits](https://www.conventionalcommits.org/) 风格，推荐交互式生成：

```bash
pnpm cz
```

常用 type：

<bp-table :data="commitTypeData" row-key="type">
  <template #columns>
    <bp-table-column title="type" data-index="type" />
    <bp-table-column title="说明" data-index="desc" />
  </template>
</bp-table>

scope 可选（如 `docs`、`packages`、`root`，也允许自定义）。示例：

```text
feat(packages): add InputNumber step strict mode
fix(packages): correct Select dropdown z-index
docs: complete local development guide
```

破坏性变更请在 body 中写明 `BREAKING CHANGE:`，或在讨论中提前说明迁移方式。

## Pull Request

1. 将分支推送到你的 Fork
2. 向 **`v3`** 发起 Pull Request
3. PR 描述建议包含：
   - **改动说明**：解决了什么问题
   - **关联 Issue**：如 `Fixes #123`
   - **验证方式**：测试命令、文档路径、截图或录屏（UI 相关）
   - **破坏性变更**：有则写清影响范围与迁移建议

保持 PR 尽量聚焦；大改动可拆成多个小 PR，便于评审。

## Code Review

- 保持友好、具体；对事不对人
- 评审关注正确性、API 一致性、可访问性、文档与测试是否跟上
- 作者根据意见修改后，在对话中回复已处理项，方便继续跟进

合并后由维护者安排发版，变更会记录在 [更新日志](/develop/changelog/)。

## 行为准则

参与本项目即表示你愿意：

- 尊重不同观点与经验水平
- 接受建设性反馈
- 以解决问题、改进项目为目标沟通

恶意行为、人身攻击或不适宜内容不可接受。情节严重时维护者可关闭 Issue / PR 或限制参与。

## 许可证

贡献的代码将默认以仓库 [MIT License](https://github.com/birdpaper-team/birdpaper-ui/blob/v3/LICENSE) 授权。若无法接受，请勿提交贡献。

## 需要帮助？

- 先看 [本地开发](/develop/local-dev/)
- 在 GitHub Issue 中提问，并附上环境与最小复现
- 文档站与组件目录：[组件目录](/components/catalog/)
