<template>
  <bp-form ref="formRef" :model="form" :rules="rules" label-width="100px">
    <bp-form-item label="用户名" field="username" required>
      <bp-input v-model="form.username" placeholder="请输入用户名" style="width: 320px" />
    </bp-form-item>
    <bp-form-item label="简介" field="bio">
      <bp-textarea v-model="form.bio" placeholder="请输入简介" style="width: 320px" />
    </bp-form-item>
    <bp-form-item label="年龄" field="age">
      <bp-input-number v-model="form.age" :min="0" :max="150" style="width: 320px" />
    </bp-form-item>
    <bp-form-item>
      <div>
        <bp-button status="primary" @click="handleValidate">校验</bp-button>
        <bp-button type="plain" @click="handleReset" style="margin-left: 8px">重置</bp-button>
        <bp-button type="plain" status="warning" @click="handleClear" style="margin-left: 8px">清除校验</bp-button>
      </div>
    </bp-form-item>
  </bp-form>
</template>

<script setup lang="ts">
import { ref } from "vue";

const form = ref({
  username: "张三",
  bio: "这是一段简介",
  age: 25,
});

const rules = ref({
  username: [{ required: true, message: "请输入用户名" }],
});

const formRef = ref<any>(null);

const handleValidate = async () => {
  await formRef.value.validate();
};

const handleReset = () => {
  formRef.value.resetFields();
};

const handleClear = () => {
  formRef.value.clearValidate();
};
</script>
