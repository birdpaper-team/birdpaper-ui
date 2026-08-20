<template>
  <bp-form ref="formRef" :model="form" :rules="rules" label-width="100px">
    <bp-form-item label="Username" field="username" required>
      <bp-input v-model="form.username" placeholder="Enter username" style="width: 320px" />
    </bp-form-item>
    <bp-form-item label="Email" field="email" required>
      <bp-input v-model="form.email" placeholder="Enter email" style="width: 320px" />
    </bp-form-item>
    <bp-form-item label="Password" field="password" required>
      <bp-input v-model="form.password" type="password" placeholder="Enter password" style="width: 320px" />
    </bp-form-item>
    <bp-form-item>
      <div>
        <bp-button status="primary" @click="handleSubmit">Submit</bp-button>
        <bp-button type="plain" @click="handleReset" style="margin-left: 8px">Reset</bp-button>
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
    { required: true, message: "Enter username" },
    { min: 3, max: 16, message: "Username must be 3–16 characters" },
  ],
  email: [
    { required: true, message: "Enter email" },
    { type: "email", message: "Enter a valid email address" },
  ],
  password: [
    { required: true, message: "Enter password" },
    { min: 6, message: "Password must be at least 6 characters" },
  ],
});

const formRef = ref<any>(null);

const handleSubmit = async () => {
  const valid = await formRef.value.validate();
  if (valid) {
    alert("Submitted!");
  }
};

const handleReset = () => {
  formRef.value.resetFields();
  formRef.value.clearValidate();
};
</script>
