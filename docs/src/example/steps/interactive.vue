<template>
  <div>
    <bp-steps v-model="current">
      <bp-step v-for="v in steps" :description="v.description">{{ v.title }}</bp-step>
    </bp-steps>
    <div style="margin-top: 20px">
      <bp-button size="small" type="plain" @click="prev" :disabled="current <= 0">上一步</bp-button>
      <bp-button
        size="small"
        status="primary"
        @click="next"
        :disabled="current >= steps.length - 1"
        style="margin-left: 8px"
      >
        下一步
      </bp-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const current = ref(0);
const steps = [
  { title: "填写信息", description: "填写基本信息" },
  { title: "审核中", description: "等待审核" },
  { title: "完成", description: "注册成功" },
];

const prev = () => {
  if (current.value > 0) current.value--;
};
const next = () => {
  if (current.value < steps.length - 1) current.value++;
};
</script>
