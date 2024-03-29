<template>
  <bp-form ref="formRef" :model="form" :label-col="3" :wrapper-col="21">
    <bp-form-item field="name" label="Name" :rules="[{ type: 'string', required: true, message: 'Please input your name.' }]">
      <bp-input :style="{ width: '100%' }" v-model="form.name" clearable placeholder="Please enter"></bp-input>
    </bp-form-item>
    <bp-form-item field="intro" label="Introduction">
      <bp-textarea
        :style="{ width: '100%' }"
        :maxlength="500"
        show-limit
        v-model="form.intro"
        clearable
        placeholder="Please enter"
      ></bp-textarea>
    </bp-form-item>
    <bp-form-item>
      <bp-space size="mini">
        <bp-button @click="onSubmit">Submit</bp-button>
        <bp-button type="text" @click="onReset">Reset</bp-button>
      </bp-space>
    </bp-form-item>
  </bp-form>
</template>

<script setup lang="ts">
import { ref } from "vue";

const formRef = ref();
const form = ref({
  name: "",
  year: 1,
  intro: "",
});

const onSubmit = async () => {
  const check = await formRef.value.validate();
};
const onReset = () => {
  formRef.value.resetFields();
};
</script>
