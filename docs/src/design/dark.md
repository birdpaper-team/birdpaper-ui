# 深色模式

Birdpaper UI 通过 CSS 变量实现深色模式，所有组件自动适配，业务侧无需额外处理。只需在根元素切换类名，整套色彩体系即可平滑过渡。

---

## 实现原理

深色模式通过在根元素添加 `.bp-dark` 类名切换。所有组件使用 CSS 变量引用颜色，变量值在浅色/深色模式下自动映射，组件代码无需任何修改。

```css
/* 浅色模式 */
:root {
  --bp-primary-6: #165dff;
  --bp-gray-0: #ffffff;
}

/* 深色模式 */
:root.bp-dark {
  --bp-primary-dark-6: #3c7eff;
  --bp-gray-dark-0: #141414;
}
```

> **原理**：`.dark` 类下的变量会覆盖 `:root` 的默认值，组件通过 `var(--bp-primary-6)` 引用时，实际取值由当前模式决定。

---

## 色阶方向

深色模式下色阶方向反转，1 为最深，10 为最浅。这意味着相同的变量名在不同模式下指向不同的实际色值。

<script setup>
const stepDirectionData = [
  { step: '1', light: '最浅底色', dark: '最深底色' },
  { step: '6', light: '主色', dark: '主色（亮度提升）' },
  { step: '10', light: '最深文本', dark: '最浅文本' },
]

const brandColorData = [
  { step: '1', lightHex: '#e8f3ff', lightDesc: '极浅蓝', darkHex: '#000d4d', darkDesc: '极深蓝' },
  { step: '6', lightHex: '#165dff', lightDesc: '主色蓝', darkHex: '#3c7eff', darkDesc: '亮蓝' },
  { step: '10', lightHex: '#000d4d', lightDesc: '极深蓝', darkHex: '#eaf4ff', darkDesc: '极浅蓝' },
]

const neutralColorData = [
  { step: '0', lightUsage: '白色背景', lightHex: '#ffffff', darkUsage: '深色背景', darkHex: '#141414' },
  { step: '1', lightUsage: '次级背景', lightHex: '#fafafa', darkUsage: '次级背景', darkHex: '#1f1f1f' },
  { step: '2', lightUsage: '边框', lightHex: '#f0f0f0', darkUsage: '边框', darkHex: '#262626' },
  { step: '8', lightUsage: '正文文本', lightHex: '#262626', darkUsage: '正文文本', darkHex: '#f0f0f0' },
  { step: '10', lightUsage: '最深文本', lightHex: '#141414', darkUsage: '最浅文本', darkHex: '#ffffff' },
]

const adaptRuleData = [
  { element: '文字颜色', rule: '使用高色阶值（8 - 10）', reason: '保证在深色背景上的对比度' },
  { element: '背景色', rule: '使用低色阶值（0 - 2）', reason: '降低视觉疲劳，营造沉浸感' },
  { element: '边框色', rule: '使用中低色阶值（2 - 3）', reason: '保持可见但不突兀' },
  { element: '功能色', rule: '主色（6）亮度适当提升', reason: '保证在深色背景上的可辨识度' },
  { element: '阴影', rule: '降低不透明度', reason: '避免在深色背景上过于生硬' },
]
</script>

<bp-table :data="stepDirectionData" row-key="step">
  <template #columns>
    <bp-table-column title="色阶" data-index="step" />
    <bp-table-column title="浅色模式" data-index="light" />
    <bp-table-column title="深色模式" data-index="dark" />
  </template>
</bp-table>

### 品牌色示例

以品牌色（Primary）为例，展示色阶在两种模式下的实际色值：

<bp-table :data="brandColorData" row-key="step">
  <template #columns>
    <bp-table-column title="色阶" data-index="step" />
    <bp-table-column title="浅色色值" data-index="lightHex" />
    <bp-table-column title="浅色描述" data-index="lightDesc" />
    <bp-table-column title="深色色值" data-index="darkHex" />
    <bp-table-column title="深色描述" data-index="darkDesc" />
  </template>
</bp-table>

> **提示**：功能色在深色模式下亮度提升约 20%，确保在深色背景上保持足够的视觉冲击力。

---

## 中性色映射

中性色（Gray）在深色模式下完全反转，浅色模式的最浅色对应深色模式的最深色，反之亦然：

<bp-table :data="neutralColorData" row-key="step">
  <template #columns>
    <bp-table-column title="色阶" data-index="step" />
    <bp-table-column title="浅色用途" data-index="lightUsage" />
    <bp-table-column title="浅色色值" data-index="lightHex" />
    <bp-table-column title="深色用途" data-index="darkUsage" />
    <bp-table-column title="深色色值" data-index="darkHex" />
  </template>
</bp-table>

> **指南**：业务侧直接使用 `var(--bp-gray-0)` ~ `var(--bp-gray-10)` 即可，无需关心当前模式——变量值会自动切换。切勿在业务代码中硬编码具体色值。

---

## 使用方式

### 切换深色模式

通过在根元素添加 / 移除 `.bp-dark` 类名即可切换：

```js
// 添加深色类名
document.documentElement.classList.add("bp-dark");

// 移除深色类名（切回浅色）
document.documentElement.classList.remove("bp-dark");
```

### 切换状态持久化

建议将用户偏好保存到 `localStorage`，页面加载时恢复：

```js
// 切换时保存
const toggleDark = () => {
  const isDark = document.documentElement.classList.toggle("bp-dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
};

// 页面加载时恢复
const saved = localStorage.getItem("theme");
if (saved === "dark") {
  document.documentElement.classList.add("bp-dark");
}
```

### 跟随系统偏好

也可以根据操作系统的偏好自动切换：

```js
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");

// 初始化时跟随系统
if (prefersDark.matches) {
  document.documentElement.classList.add("bp-dark");
}

// 监听系统偏好变化
prefersDark.addEventListener("change", (e) => {
  document.documentElement.classList.toggle("bp-dark", e.matches);
});
```

### 在 CSS 中使用

组件内部已通过 CSS 变量自动适配，业务侧如需自定义样式，直接引用变量即可：

```css
/* 直接使用变量，会根据当前模式自动切换 */
.my-element {
  color: var(--bp-gray-10);
  background: var(--bp-gray-0);
  border: 1px solid var(--bp-gray-2);
}

/* 需要透明度时使用 RGB 变量 */
.my-overlay {
  background: rgba(var(--bp-gray-0-rgb), 0.8);
}
```

> **提示**：所有颜色变量均提供 `-rgb` 后缀的 RGB 版本，用于 `rgba()` 场景。详见 [色彩](./color) 文档。

---

## 适配规范

组件在深色模式下的适配遵循以下规则，确保可读性和视觉舒适度：

<bp-table :data="adaptRuleData" row-key="element">
  <template #columns>
    <bp-table-column title="元素" data-index="element" />
    <bp-table-column title="规则" data-index="rule" />
    <bp-table-column title="原因" data-index="reason" />
  </template>
</bp-table>

> **指南**：业务侧自定义组件时，遵循以上规则可保证与 Birdpaper UI 组件库在深色模式下的视觉一致性。核心原则是——永远使用语义化 CSS 变量，不要硬编码色值。
