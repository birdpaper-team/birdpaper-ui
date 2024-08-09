<template>
  <div>
    <bp-radio-group type="button" v-model="tab">
      <bp-radio v-for="v in tabList" :value="v.value">{{ v.label }}</bp-radio>
    </bp-radio-group>

    <div v-show="tab === 'demo'">
      <slot name="demo"></slot>
    </div>
    <div v-show="tab === 'api'">
      <slot name="api"></slot>
    </div>
    <div v-show="tab === 'guide'">
      <slot name="guide"></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const tabList = [
  { label: "示例", value: "demo" },
  { label: "API", value: "api" },
  { label: "指南", value: "guide" },
];
const tab = ref("demo");
</script>
