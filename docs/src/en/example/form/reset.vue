<template>
  <bp-form ref="formRef" :model="form" :rules="rules" label-width="100px">
    <bp-form-item label="Username" field="username" required>
      <bp-input v-model="form.username" placeholder="Enter username" style="width: 320px" />
    </bp-form-item>
    <bp-form-item label="Bio" field="bio">
      <bp-textarea v-model="form.bio" placeholder="Enter bio" style="width: 320px" />
    </bp-form-item>
    <bp-form-item label="Age" field="age">
      <bp-input-number v-model="form.age" :min="0" :max="150" style="width: 320px" />
    </bp-form-item>
    <bp-form-item>
      <div>
        <bp-button status="primary" @click="handleValidate">Validate</bp-button>
        <bp-button type="plain" @click="handleReset" style="margin-left: 8px">Reset</bp-button>
        <bp-button type="plain" status="warning" @click="handleClear" style="margin-left: 8px">Clear validation</bp-button>
      </div>
    </bp-form-item>
  </bp-form>
</template>

<script setup lang="ts">
import { ref } from "vue";

const form = ref({
  username: "Zhang San",
  bio: "This is a short bio",
  age: 25,
});

const rules = ref({
  username: [{ required: true, message: "Enter username" }],
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
