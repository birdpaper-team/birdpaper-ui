<template>
  <div>
    <bp-radio-group v-model="position" type="button" style="margin-bottom: 20px">
      <bp-radio value="left">left</bp-radio>
      <bp-radio value="right">right</bp-radio>
      <bp-radio value="top">top</bp-radio>
    </bp-radio-group>

    <bp-form :model="form" :label-position="position" label-width="80px">
      <bp-form-item label="Name">
        <bp-input v-model="form.name" style="width: 320px" />
      </bp-form-item>
      <bp-form-item label="Email">
        <bp-input v-model="form.email" style="width: 320px" />
      </bp-form-item>
    </bp-form>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const position = ref<"left" | "right" | "top">("right");

const form = ref({
  name: "",
  email: "",
});
</script>
