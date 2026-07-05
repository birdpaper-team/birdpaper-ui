# 设计资源

Birdpaper UI 提供完整的设计资源体系，帮助设计师和开发者高效协作，从设计稿到代码实现保持一致。

---

## 图标库

Birdpaper UI 使用 [Birdpaper Icon](https://github.com/nicepkg/birdpaper-icon) 作为官方图标库，基于 [Remix Icon](https://remixicon.com/) 封装，提供 2000+ 线性与填充风格的 Vue 图标组件。

### 安装

```bash
pnpm add birdpaper-icon
```

### 基础用法

图标组件支持 `size`、`fill`、`rotate` 等属性，按需引入即可：

```vue
<script setup>
import { IconSearchLine, IconHeartFill } from "birdpaper-icon";
</script>

<template>
  <!-- 线性图标 -->
  <IconSearchLine size="16px" />

  <!-- 填充图标 + 自定义颜色 -->
  <IconHeartFill size="16px" fill="#f53f3f" />

  <!-- 旋转 -->
  <IconSearchLine size="16px" :rotate="90" />
</template>
```

### 图标属性

<script setup>
const iconPropsData = [
  { prop: 'size', type: 'String', default: '18px', desc: '图标尺寸，需带单位' },
  { prop: 'fill', type: 'String', default: '#595959', desc: '图标颜色' },
  { prop: 'spin', type: 'Boolean', default: 'false', desc: '是否开启旋转动画' },
  { prop: 'rotate', type: 'Number', default: '-', desc: '旋转角度（度）' },
]

const tokenData = [
  { category: '色彩', prefix: '--bp-primary- / --bp-gray-', example: '--bp-primary-6: #165dff', link: '色彩' },
  { category: '尺寸', prefix: '--bp-size-', example: '--bp-size-height-default: 32px', link: '样式指南' },
  { category: '层级', prefix: '--z-index-', example: '--z-index-base: 2000', link: '样式指南' },
  { category: '间距', prefix: '无独立前缀', example: '遵循 4px 网格体系', link: '样式指南' },
]

const componentData = [
  { category: '通用', components: 'Button, Icon, Link' },
  { category: '布局', components: 'Grid, Space' },
  { category: '导航', components: 'Steps, Pagination' },
  { category: '输入', components: 'Input, InputNumber, Select, Checkbox, Radio, Switch, DatePicker, TimePicker, ColorPicker, InputTag, VerifyCode' },
  { category: '数据展示', components: 'Table, Tag, Badge, Avatar, Image, Statistic, Empty, Rate' },
  { category: '反馈', components: 'Modal, Drawer, Message, Popconfirm, Tooltip, Spin' },
  { category: '其他', components: 'Form, ConfigProvider' },
]
</script>

<bp-table :data="iconPropsData" row-key="prop">
  <template #columns>
    <bp-table-column title="属性" data-index="prop" />
    <bp-table-column title="类型" data-index="type" />
    <bp-table-column title="默认值" data-index="default" />
    <bp-table-column title="说明" data-index="desc" />
  </template>
</bp-table>

> **指南**：图标命名遵循 `Icon{名称}{风格}` 格式，风格分为 `Line`（线性）和 `Fill`（填充）。优先使用线性图标，填充图标用于强调态或选中态。

---

## 设计 Token

所有设计 Token 以 CSS 变量形式提供，可直接在设计工具或代码中引用。变量命名遵循 `--bp-{分类}-{标识}` 的统一规范。

<bp-table :data="tokenData" row-key="category">
  <template #columns>
    <bp-table-column title="分类" data-index="category" />
    <bp-table-column title="前缀" data-index="prefix" />
    <bp-table-column title="示例" data-index="example" />
    <bp-table-column title="详见" data-index="link" />
  </template>
</bp-table>

> **提示**：所有色彩 Token 均提供 `-rgb` 后缀版本（如 `--bp-primary-6-rgb`），用于 `rgba()` 透明度场景。深色模式下变量自动切换，无需手动处理。详见 [色彩](./color) 和 [样式指南](./guide)。

---

## 组件速查

按功能分类的组件清单，点击可跳转至对应文档：

<bp-table :data="componentData" row-key="category">
  <template #columns>
    <bp-table-column title="分类" data-index="category" />
    <bp-table-column title="组件" data-index="components" />
  </template>
</bp-table>

---

## 主题定制

### CSS 变量覆盖

通过覆盖 CSS 变量实现全局主题定制，适用于运行时动态切换：

```css
:root {
  --bp-primary-6: #722ed1; /* 替换品牌色为紫色 */
  --bp-primary-5: #9254de;
  --bp-primary-4: #b37feb;
}
```

> **指南**：替换品牌色时，建议同时调整 4 - 7 这几个常用色阶，保持色阶梯度的协调。仅替换主色（6）可能导致 hover / active 态颜色不协调。

### SCSS 变量定制

通过 SCSS 变量在构建时定制，适用于需要修改类名前缀、间距基准等底层配置：

```scss
$namespace: "bp"; // 类名前缀
$borderSize: 1px; // 边框宽度
$defaultMargin: 10px; // 默认外边距
```

### 深色模式适配

主题定制在深色模式下同样生效。如需为深色模式单独定制，使用 `.dark` 作用域：

```css
:root {
  --bp-primary-6: #722ed1;
}

.dark {
  --bp-primary-dark-6: #b37feb; /* 深色模式下的紫色主色 */
}
```

> **提示**：深色模式的变量名使用 `-dark-` 中缀，色阶方向反转（1 最深，10 最浅）。详见 [深色模式](./dark)。

---

## 链接

- [GitHub 仓库](https://github.com/birdpaper-team/birdpaper-ui) — 源码与 Issue 追踪
- [图标库](https://icon.birdpaper.design) — 2000+ 图标组件
- [更新日志](/develop/changelog) — 版本发布记录
