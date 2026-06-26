# 全局配置 ConfigProvider

Birdpaper UI 通过 `ConfigProvider` 提供全局配置能力，支持自定义组件前缀、命名空间、国际化、尺寸、层级等参数，所有子组件会自动继承全局配置。

## 基本用法

### 安装时配置

在 `app.use()` 时传入配置对象，所有组件会自动注册并注入全局配置：

```ts
import { createApp } from "vue";
import BirdpaperUI from "birdpaper-ui";
import "birdpaper-ui/theme/index.css";

const app = createApp(App);

app.use(BirdpaperUI, {
  prefix: "Bp", // 组件注册前缀
  namespace: "bp", // CSS 命名空间
  locale: "zh-CN", // 语言
  size: "default", // 全局尺寸
  zIndex: 2000, // 层级基准值
  emptyText: "暂无数据", // 空状态文案
});
```

### 运行时配置

在 setup 中调用 `provideGlobalConfig`，可动态修改全局配置：

```vue
<script setup>
import { provideGlobalConfig } from "birdpaper-ui";

provideGlobalConfig({
  locale: "en",
  size: "small",
});
</script>
```

## 配置项

| 属性        | 类型            | 默认值       | 说明                                                                                                          |
| ----------- | --------------- | ------------ | ------------------------------------------------------------------------------------------------------------- |
| `prefix`    | `string`        | `"Bp"`       | 组件全局注册名称前缀。设为 `"My"` 后，`Button` 注册为 `<MyButton>`                                            |
| `namespace` | `string`        | `"bp"`       | CSS 类名命名空间，影响所有组件的 BEM 类名前缀（如 `bp-button`）                                               |
| `locale`    | `string`        | `"zh-CN"`    | 全局语言代码，影响 DatePicker、TimePicker、Pagination 等组件的内部文案                                        |
| `size`      | `ComponentSize` | `"default"`  | 全局默认尺寸，影响 Input、Select、Button 等表单类组件。可选值：`"mini"` / `"small"` / `"default"` / `"large"` |
| `zIndex`    | `number`        | `2000`       | 弹出层组件（Modal、Drawer、Tooltip、Message）的 z-index 基准值                                                |
| `emptyText` | `string`        | `"暂无数据"` | Table、Select 等组件的空状态默认文案                                                                          |

### ComponentSize 类型

```ts
type ComponentSize = "mini" | "small" | "default" | "large";
```

| 值        | 高度 | 字号 | 适用场景               |
| --------- | ---- | ---- | ---------------------- |
| `mini`    | 22px | 12px | 紧凑型表格内嵌、标签栏 |
| `small`   | 28px | 13px | 密度较高的表单、弹窗内 |
| `default` | 32px | 14px | 通用场景（默认）       |
| `large`   | 36px | 14px | 突出展示、独立表单页   |

## 配置优先级

组件自身 prop 始终优先于全局配置：

```
组件 prop > ConfigProvider 全局配置 > 组件默认值
```

```vue
<template>
  <!-- 全局设为 small -->
  <bp-config-provider :config="{ size: 'small' }">
    <!-- ✅ 使用 small（继承全局） -->
    <bp-input placeholder="继承全局尺寸" />

    <!-- ✅ 使用 large（prop 优先） -->
    <bp-input size="large" placeholder="局部覆盖" />
  </bp-config-provider>
</template>
```

## 命名空间

修改 `namespace` 可自定义所有组件的 CSS 类名前缀，适用于多组件库共存避免样式冲突：

```ts
app.use(BirdpaperUI, { namespace: "my-ui" });
```

```html
<!-- 默认输出 -->
<button class="bp-button">...</button>

<!-- 自定义后 -->
<button class="my-ui-button">...</button>
```

## 组件注册前缀

修改 `prefix` 可自定义全局注册的组件名称：

```ts
app.use(BirdpaperUI, { prefix: "My" });
```

```html
<!-- 默认 -->
<BpButton>Click</BpButton>

<!-- 自定义后 -->
<MyButton>Click</MyButton>
```

## z-index 管理

当页面中同时存在多个弹出层组件时，可通过 `zIndex` 统一管理层级关系：

```ts
app.use(BirdpaperUI, { zIndex: 3000 });
```

各组件基于基准值的偏移：

| 组件    | z-index 计算 |
| ------- | ------------ |
| Modal   | `zIndex`     |
| Drawer  | `zIndex + 1` |
| Tooltip | `zIndex`     |
| Message | `zIndex + 3` |

## 在组件中消费全局配置

组件开发者可通过 `useGlobalConfig` 获取全局配置：

```vue
<script setup>
import { useGlobalConfig } from "@birdpaper-ui/hooks";

const { size, locale, zIndex, emptyText } = useGlobalConfig();

// 组件 prop 优先，回退到全局值
const finalSize = computed(() => props.size || size.value);
</script>
```

## TypeScript

```ts
import type { ConfigProviderContext, ComponentSize } from "birdpaper-ui";

const config: ConfigProviderContext = {
  prefix: "Bp",
  namespace: "bp",
  locale: "zh-CN",
  size: "default",
  zIndex: 2000,
  emptyText: "暂无数据",
};
```

所有配置项均为可选，未设置的项使用默认值。
