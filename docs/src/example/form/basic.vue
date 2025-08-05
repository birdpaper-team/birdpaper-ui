<template>
  <bp-form ref="formRef" :model="form" label-position="right" :rules="rules" label-width="100px">
    <bp-form-item label="ID" field="id">
      <bp-input id="id" v-model="form.id" placeholder="请输入" style="width: 320px" />
    </bp-form-item>
    <bp-form-item label="Name" field="name">
      <bp-input v-model="form.name" style="width: 320px" />
    </bp-form-item>
    <bp-form-item label="Description" field="description">
      <bp-textarea v-model="form.description" style="width: 320px" />
    </bp-form-item>
    <bp-form-item label="Number" field="number">
      <bp-input-number v-model="form.number" style="width: 320px" />
    </bp-form-item>
    <bp-form-item label="Sex" field="sex">
      <bp-radio-group v-model="form.sex" style="width: 320px">
        <bp-radio value="male">Male</bp-radio>
        <bp-radio value="female">Female</bp-radio>
      </bp-radio-group>
    </bp-form-item>
    <bp-form-item label="Hobbits" field="hobbits">
      <bp-checkbox-group v-model="form.hobbits" style="width: 320px">
        <bp-checkbox value="test1">test1</bp-checkbox>
        <bp-checkbox value="test2">test2</bp-checkbox>
        <bp-checkbox value="test3">test3</bp-checkbox>
      </bp-checkbox-group>
    </bp-form-item>
    <bp-form-item label="Is Student" field="isStudent">
      <bp-switch v-model="form.isStudent" style="width: 320px" />
    </bp-form-item>
    <bp-form-item label="Time" field="createTime">
      <bp-date-picker v-model="form.createTime" style="width: 320px" />
    </bp-form-item>
    <bp-form-item>
      <bp-button type="normal" status="primary" @click="validate">Submit</bp-button>
    </bp-form-item>
  </bp-form>
</template>

<script setup lang="ts">
import { ref } from "vue";

const form = ref<any>({
  id: "",
  name: "test",
  description: "test description",
  number: 100,
  sex: "male",
  hobbits: ["test1", "test3"],
  isStudent: true,
  createTime: "2024-01-01 12:00:00",
});

const rules = ref<any>({
  id: [{ required: true, message: "请输入ID" }],
});

const formRef = ref<any>(null);
const validate = async () => {
  await formRef.value.validate();
};
</script>
