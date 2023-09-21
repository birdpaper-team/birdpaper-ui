<template>
  <bp-form :model="form">
    <bp-form-item field="name" label="姓名">
      <bp-input :style="{ width: '180px' }" v-model="form.name" clearable placeholder="请输入内容"></bp-input>
    </bp-form-item>
    <bp-form-item field="intro" label="介绍">
      <bp-input :style="{ width: '180px' }" v-model="form.intro" clearable placeholder="请输入内容"></bp-input>
      <!-- <bp-textarea :style="{ width: '280px' }" v-model="form.intro" clearable placeholder="请输入内容"></bp-textarea> -->
    </bp-form-item>
  </bp-form>
</template>

<script setup lang="ts">
import { ref } from "vue";

const form = ref({
  name: "",
  intro: "",
});
</script>
