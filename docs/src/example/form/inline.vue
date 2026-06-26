<template>
  <bp-form :model="form" layout="inline" label-width="60px">
    <bp-form-item label="姓名">
      <bp-input v-model="form.name" placeholder="请输入" />
    </bp-form-item>
    <bp-form-item label="城市">
      <bp-input v-model="form.city" placeholder="请输入" />
    </bp-form-item>
    <bp-form-item>
      <bp-button status="primary" size="small">查询</bp-button>
    </bp-form-item>
  </bp-form>
</template>

<script setup lang="ts">
import { ref } from "vue";

const form = ref({
  name: "",
  city: "",
});
</script>
