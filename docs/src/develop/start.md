# 快速上手

本节介绍 Birdpaper UI 的基本使用方式。

## 前置条件

确保已完成 [安装](/develop/install/)。

## 使用组件

### 在模板中使用

所有组件以 `bp-` 为前缀注册，直接在模板中使用：

```vue
<template>
  <bp-space>
    <bp-button type="primary">主要按钮</bp-button>
    <bp-button type="secondary">次要按钮</bp-button>
  </bp-space>
</template>
```

### 表单示例

```vue
<template>
  <bp-form :model="form" :rules="rules" label-width="80px">
    <bp-form-item label="用户名" field="name" required>
      <bp-input v-model="form.name" placeholder="请输入用户名" />
    </bp-form-item>
    <bp-form-item label="邮箱" field="email">
      <bp-input v-model="form.email" placeholder="请输入邮箱" />
    </bp-form-item>
    <bp-form-item>
      <bp-button type="primary" @click="handleSubmit">提交</bp-button>
    </bp-form-item>
  </bp-form>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";

const form = reactive({ name: "", email: "" });
const rules = {
  name: [{ required: true, message: "请输入用户名" }],
};
</script>
```

### 数据展示示例

```vue
<template>
  <bp-table :data="tableData" row-key="id">
    <bp-table-column title="姓名" data-index="name" />
    <bp-table-column title="年龄" data-index="age" />
    <bp-table-column title="地址" data-index="address" />
  </bp-table>
</template>

<script setup lang="ts">
const tableData = [
  { id: 1, name: "张三", age: 28, address: "北京市" },
  { id: 2, name: "李四", age: 32, address: "上海市" },
];
</script>
```

### 反馈组件示例

```vue
<script setup lang="ts">
import { Message, Modal } from "birdpaper-ui";

const showMessage = () => {
  Message({ type: "success", content: "操作成功！" });
};

const showModal = () => {
  Modal.info({ title: "提示", content: "这是一条消息" });
};
</script>
```

## 自定义主题

Birdpaper UI 使用 CSS 变量构建主题系统，可通过覆盖变量自定义：

```css
:root {
  --bp-primary-6: #1677ff; /* 主题主色 */
  --bp-gray-9: #1a1a1a;    /* 主要文字色 */
}
```

详见 [定制主题](/develop/theme/)。

## 国际化

通过全局配置设置语言：

```ts
import BirdpaperUI from "birdpaper-ui";

app.use(BirdpaperUI, { locale: "en" });
```

详见 [全局配置](/components/config/)。

## 下一步

- [组件目录](/components/catalog/) — 浏览所有可用组件
- [全局配置](/components/config/) — 自定义前缀、尺寸、层级等
- [定制主题](/develop/theme/) — 用 CSS 变量自定义颜色、尺寸与深色模式
- [更新日志](/develop/changelog/) — 查看版本更新记录
