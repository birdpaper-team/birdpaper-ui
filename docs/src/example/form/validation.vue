<template>
  <bp-form ref="formRef" :model="form" :rules="rules" label-width="100px">
    <bp-form-item label="用户名" field="username" required>
      <bp-input v-model="form.username" placeholder="请输入用户名" style="width: 320px" />
    </bp-form-item>
    <bp-form-item label="邮箱" field="email" required>
      <bp-input v-model="form.email" placeholder="请输入邮箱" style="width: 320px" />
    </bp-form-item>
    <bp-form-item label="密码" field="password" required>
      <bp-input v-model="form.password" type="password" placeholder="请输入密码" style="width: 320px" />
    </bp-form-item>
    <bp-form-item>
      <div>
        <bp-button status="primary" @click="handleSubmit">提交</bp-button>
        <bp-button type="plain" @click="handleReset" style="margin-left: 8px">重置</bp-button>
      </div>
    </bp-form-item>
  </bp-form>
</template>

<script setup lang="ts">
import { ref } from "vue";

const form = ref({
  username: "",
  email: "",
  password: "",
});

const rules = ref({
  username: [
    { required: true, message: "请输入用户名" },
    { min: 3, max: 16, message: "用户名长度为 3-16 个字符" },
  ],
  email: [
    { required: true, message: "请输入邮箱" },
    { type: "email", message: "请输入正确的邮箱格式" },
  ],
  password: [
    { required: true, message: "请输入密码" },
    { min: 6, message: "密码至少 6 个字符" },
  ],
});

const formRef = ref<any>(null);

const handleSubmit = async () => {
  const valid = await formRef.value.validate();
  if (valid) {
    alert("提交成功！");
  }
};

const handleReset = () => {
  formRef.value.resetFields();
  formRef.value.clearValidate();
};
</script>
