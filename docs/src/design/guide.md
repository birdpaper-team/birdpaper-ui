# 样式指南

本文档定义了 Birdpaper UI 的样式规范，涵盖字体、尺寸、圆角、阴影、间距、动效等基础 Token，确保组件间的视觉一致性。

## 字体

### 字体族

```css
font-family: Inter, -apple-system, BlinkMacSystemFont, PingFang SC, Hiragino Sans GB, Noto Sans, Microsoft YaHei, Helvetica
    Neue, Helvetica, Arial, sans-serif;
```

优先使用系统字体，保证各平台最佳的渲染效果和加载性能。

### 字号

| 场景        | 字号 | 行高 |
| ----------- | ---- | ---- |
| 辅助文本    | 12px | 1.4  |
| 正文 / 表单 | 14px | 1.6  |
| 小标题      | 16px | 1.5  |
| 大标题      | 20px | 1.4  |

### 字重

| Token    | 值  | 用途             |
| -------- | --- | ---------------- |
| Regular  | 400 | 正文、描述文本   |
| Medium   | 500 | 标题、强调文本   |
| Semibold | 600 | 大标题、关键信息 |

## 尺寸

组件提供 4 级尺寸，影响高度、字号、内边距和圆角：

| 尺寸    | 变量名                     | 高度 | 字号 | 水平内边距 | 圆角 |
| ------- | -------------------------- | ---- | ---- | ---------- | ---- |
| Mini    | `--bp-size-height-mini`    | 22px | 12px | 10px       | 3px  |
| Small   | `--bp-size-height-small`   | 28px | 13px | 14px       | 4px  |
| Default | `--bp-size-height-default` | 32px | 14px | 20px       | 6px  |
| Large   | `--bp-size-height-large`   | 36px | 14px | 26px       | 8px  |

Button、Input、Select 等表单类组件均遵循此尺寸体系。

## 圆角

| 类型     | 值   | 用途                       |
| -------- | ---- | -------------------------- |
| 小圆角   | 3px  | Mini 尺寸组件              |
| 默认圆角 | 6px  | Default 尺寸组件           |
| 大圆角   | 8px  | Large 尺寸组件、卡片、弹层 |
| 全圆角   | 40px | Pill 形按钮、胶囊标签      |

## 阴影

| 层级     | 值                               | 用途           |
| -------- | -------------------------------- | -------------- |
| 浅阴影   | `0 2px 8px rgba(0, 0, 0, 0.06)`  | 卡片 hover     |
| 默认阴影 | `0 4px 12px rgba(0, 0, 0, 0.1)`  | 弹出层         |
| 深阴影   | `0 4px 16px rgba(0, 0, 0, 0.15)` | 浮层、下拉菜单 |

## 间距

基于 4px 网格的间距体系：

| Token    | 值   | 典型场景       |
| -------- | ---- | -------------- |
| 紧凑     | 4px  | 图标与文字间距 |
| 小间距   | 8px  | 表单项内部     |
| 中间距   | 12px | 列表项间距     |
| 默认间距 | 16px | 区块间距       |
| 大间距   | 24px | 页面区域间距   |

## 边框

| 场景           | 值                              |
| -------------- | ------------------------------- |
| 输入框、分割线 | `1px solid var(--bp-gray-2)`    |
| 聚焦态         | `1px solid var(--bp-primary-6)` |
| 错误态         | `1px solid var(--bp-danger-6)`  |
| 禁用态         | `1px solid var(--bp-gray-3)`    |

## 层级 (z-index)

使用 CSS 变量统一管理，避免硬编码：

| 变量名              | 值   | 用途             |
| ------------------- | ---- | ---------------- |
| `--z-index-base`    | 2000 | Trigger、Tooltip |
| `--z-index-modal`   | 2000 | Modal 对话框     |
| `--z-index-drawer`  | 2001 | Drawer 抽屉      |
| `--z-index-message` | 2003 | Message 消息提示 |

## 动效

| 场景            | 时长  | 缓动              |
| --------------- | ----- | ----------------- |
| 颜色/透明度变化 | 0.2s  | ease              |
| 弹出/收起       | 0.25s | ease-in-out       |
| 布局变化        | 0.3s  | ease              |
| 加载旋转        | 1.2s  | linear (infinite) |
