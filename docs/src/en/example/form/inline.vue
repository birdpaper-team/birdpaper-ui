<template>
  <bp-form :model="form" layout="inline" label-width="60px">
    <bp-form-item label="Name">
      <bp-input v-model="form.name" placeholder="Please enter" />
    </bp-form-item>
    <bp-form-item label="City">
      <bp-input v-model="form.city" placeholder="Please enter" />
    </bp-form-item>
    <bp-form-item>
      <bp-button status="primary" size="small">Query</bp-button>
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
