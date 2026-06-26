<template>
  <bp-form :model="form" :rules="rules" label-width="100px">
    <bp-form-item label="用户名" field="username" required auto-validate>
      <bp-input v-model="form.username" placeholder="输入后失焦触发校验" style="width: 320px" />
    </bp-form-item>
    <bp-form-item label="邮箱" field="email" required auto-validate>
      <bp-input v-model="form.email" placeholder="输入后失焦触发校验" style="width: 320px" />
    </bp-form-item>
    <bp-form-item label="显示冒号" field="colon" required show-colon>
      <bp-input v-model="form.colon" style="width: 320px" />
    </bp-form-item>
    <bp-form-item label="自定义宽度" field="custom" :width="'120px'">
      <bp-input v-model="form.custom" style="width: 320px" />
    </bp-form-item>
  </bp-form>
</template>

<script setup lang="ts">
import { ref } from "vue";

const form = ref({
  username: "",
  email: "",
  colon: "",
  custom: "",
});

const rules = ref({
  username: [
    { required: true, message: "请输入用户名" },
    { min: 3, message: "至少 3 个字符" },
  ],
  email: [
    { required: true, message: "请输入邮箱" },
    { type: "email", message: "邮箱格式不正确" },
  ],
});
</script>
