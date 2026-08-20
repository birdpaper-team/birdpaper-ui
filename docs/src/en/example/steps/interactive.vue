<template>
  <div>
    <bp-steps v-model="current">
      <bp-step v-for="v in steps" :description="v.description">{{ v.title }}</bp-step>
    </bp-steps>
    <div style="margin-top: 20px">
      <bp-button size="small" type="plain" @click="prev" :disabled="current <= 0">Previous</bp-button>
      <bp-button
        size="small"
        status="primary"
        @click="next"
        :disabled="current >= steps.length - 1"
        style="margin-left: 8px"
      >
        Next
      </bp-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const current = ref(0);
const steps = [
  { title: "Fill in info", description: "Fill in basic info" },
  { title: "In review", description: "Pending review" },
  { title: "Done", description: "Registered" },
];

const prev = () => {
  if (current.value > 0) current.value--;
};
const next = () => {
  if (current.value < steps.length - 1) current.value++;
};
</script>
