# 设计资源

Birdpaper UI 提供以下设计资源，帮助设计师和开发者高效协作。

## 图标库

Birdpaper UI 使用 [Birdpaper Icon](https://github.com/nicepkg/birdpaper-icon) 作为图标库，基于 Remix Icon，提供 2000+ 线性与填充风格图标。

```bash
pnpm add birdpaper-icon
```

```vue
<script setup>
import { IconSearchLine, IconHeartFill } from "birdpaper-icon";
</script>

<template>
  <IconSearchLine size="16" />
  <IconHeartFill size="16" style="color: #f53f3f" />
</template>
```

## 设计 Token

所有设计 Token 以 CSS 变量形式提供，可直接在设计工具或代码中引用：

| 分类 | 前缀                           | 示例                             |
| ---- | ------------------------------ | -------------------------------- |
| 色彩 | `--bp-primary-` / `--bp-gray-` | `--bp-primary-6: #165dff`        |
| 尺寸 | `--bp-size-`                   | `--bp-size-height-default: 32px` |
| 层级 | `--z-index-`                   | `--z-index-base: 2000`           |

详见 [色彩](./color.md) 和 [样式指南](./guide.md)。

## 组件速查

| 分类     | 组件                                                                                                           |
| -------- | -------------------------------------------------------------------------------------------------------------- |
| 通用     | Button, Icon, Link                                                                                             |
| 布局     | Grid, Space                                                                                                    |
| 导航     | Steps, Pagination                                                                                              |
| 输入     | Input, InputNumber, Select, Checkbox, Radio, Switch, DatePicker, TimePicker, ColorPicker, InputTag, VerifyCode |
| 数据展示 | Table, Tag, Badge, Avatar, Image, Statistic, Empty, Rate                                                       |
| 反馈     | Modal, Drawer, Message, Popconfirm, Tooltip, Spin                                                              |
| 其他     | Form, ConfigProvider                                                                                           |

## 主题定制

通过覆盖 CSS 变量实现全局主题定制：

```css
:root {
  --bp-primary-6: #722ed1; /* 替换品牌色为紫色 */
}
```

也可通过 SCSS 变量在构建时定制：

```scss
$namespace: "bp"; // 类名前缀
$borderSize: 1px; // 边框宽度
$defaultMargin: 10px; // 默认外边距
```

## 链接

- [GitHub 仓库](https://github.com/nicepkg/birdpaper-ui)
- [图标库](https://github.com/nicepkg/birdpaper-icon)
- [更新日志](/develop/changelog)
