# 色彩

Birdpaper UI 的色彩体系由 **功能色** 和 **中性色** 两部分组成。功能色用于传达状态和语义，中性色用于文本、背景、边框等基础界面元素。所有颜色均提供浅色和深色模式两套变量，支持主题切换。

## 功能色

功能色包含品牌色、成功色、警告色、危险色，每个色系提供 10 个色阶。点击任意色块可复制色值。

<color-palette :groups="[
  {
    name: '主题色',
    mainHex: '#165dff',
    steps: [
      { step: 1, hex: '#e8f3ff' },
      { step: 2, hex: '#bedaff' },
      { step: 3, hex: '#94bfff' },
      { step: 4, hex: '#6aa1ff' },
      { step: 5, hex: '#4080ff' },
      { step: 6, hex: '#165dff' },
      { step: 7, hex: '#0e42d2' },
      { step: 8, hex: '#072ca6' },
      { step: 9, hex: '#031a79' },
      { step: 10, hex: '#000d4d' },
    ],
  },
  {
    name: '成功色',
    mainHex: '#009622',
    steps: [
      { step: 1, hex: '#bfe8c6' },
      { step: 2, hex: '#8fe09a' },
      { step: 3, hex: '#58d66c' },
      { step: 4, hex: '#25c944' },
      { step: 5, hex: '#0aae2a' },
      { step: 6, hex: '#009622' },
      { step: 7, hex: '#007f1f' },
      { step: 8, hex: '#00681b' },
      { step: 9, hex: '#005117' },
      { step: 10, hex: '#003a11' },
    ],
  },
  {
    name: '警告色',
    mainHex: '#ff7d00',
    steps: [
      { step: 1, hex: '#fff7e8' },
      { step: 2, hex: '#ffe4ba' },
      { step: 3, hex: '#ffcf8b' },
      { step: 4, hex: '#ffb65d' },
      { step: 5, hex: '#ff9a2e' },
      { step: 6, hex: '#ff7d00' },
      { step: 7, hex: '#d25f00' },
      { step: 8, hex: '#a64500' },
      { step: 9, hex: '#792e00' },
      { step: 10, hex: '#4d1b00' },
    ],
  },
  {
    name: '危险色',
    mainHex: '#f53f3f',
    steps: [
      { step: 1, hex: '#ffece8' },
      { step: 2, hex: '#fdcdc5' },
      { step: 3, hex: '#fbaca3' },
      { step: 4, hex: '#f98981' },
      { step: 5, hex: '#f76560' },
      { step: 6, hex: '#f53f3f' },
      { step: 7, hex: '#cb272d' },
      { step: 8, hex: '#a1151e' },
      { step: 9, hex: '#770813' },
      { step: 10, hex: '#4d000a' },
    ],
  },
]" />

## 中性色

中性色用于文本、背景、边框、分割线等基础界面元素，是使用频率最高的色系。点击可复制色值。

<color-gray :colors="[
  { step: 0, hex: '#ffffff' },
  { step: 1, hex: '#fafafa' },
  { step: 2, hex: '#f0f0f0' },
  { step: 3, hex: '#d9d9d9' },
  { step: 4, hex: '#bfbfbf' },
  { step: 5, hex: '#8c8c8c' },
  { step: 6, hex: '#595959' },
  { step: 7, hex: '#434343' },
  { step: 8, hex: '#262626' },
  { step: 9, hex: '#1f1f1f' },
  { step: 10, hex: '#141414' },
]" />

## 色阶使用规范

每个功能色提供 10 个色阶，按用途可分为以下层级：

<script setup>
const tableData = [
  { level: '浅底', step: '1 - 2', usage: '背景色、标签底色' },
  { level: '边框', step: '3 - 4', usage: '边框、分割线' },
  { level: '辅助', step: '5', usage: 'hover 态、辅助元素' },
  { level: '主色', step: '6', usage: '主要图标、文本、按钮' },
  { level: '交互', step: '7 - 8', usage: 'hover / active 态' },
  { level: '深色', step: '9 - 10', usage: '深色文本、深色背景' },
]
</script>

<bp-table :data="tableData" row-key="level">
  <template #columns>
    <bp-table-column title="层级" data-index="level" />
    <bp-table-column title="色阶" data-index="step" />
    <bp-table-column title="使用场景" data-index="usage" />
  </template>
</bp-table>

## RGB 变量

每个颜色同时提供 RGB 变量（后缀 `-rgb`），用于需要设置透明度的场景：

```css
/* 基础用法 */
color: var(--bp-primary-6);

/* 带透明度用法 */
background: rgba(var(--bp-primary-6-rgb), 0.1);
```

## 深色模式

深色模式下变量名添加 `-dark-` 中缀，色阶方向反转（1 最深，10 最浅）：

```css
/* 浅色模式 */
--bp-primary-6: #165dff;

/* 深色模式 */
--bp-primary-dark-6: #3c7eff;
```

组件库通过 CSS 变量自动适配深色模式，业务侧无需手动切换。
