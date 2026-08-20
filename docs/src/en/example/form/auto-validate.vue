<template>
  <bp-form :model="form" :rules="rules" label-width="100px">
    <bp-form-item label="Username" field="username" required auto-validate>
      <bp-input v-model="form.username" placeholder="Validate on blur after input" style="width: 320px" />
    </bp-form-item>
    <bp-form-item label="Email" field="email" required auto-validate>
      <bp-input v-model="form.email" placeholder="Validate on blur after input" style="width: 320px" />
    </bp-form-item>
    <bp-form-item label="Show colon" field="colon" required show-colon>
      <bp-input v-model="form.colon" style="width: 320px" />
    </bp-form-item>
    <bp-form-item label="Custom width" field="custom" :width="'120px'">
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
    { required: true, message: "Enter username" },
    { min: 3, message: "At least 3 characters" },
  ],
  email: [
    { required: true, message: "Enter email" },
    { type: "email", message: "Invalid email format" },
  ],
});
</script>
