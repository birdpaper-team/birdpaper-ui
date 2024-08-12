<template>
  <div :class="name">
    <div class="docs-radio-group">
      <div
        :class="['docs-radio', 'select-none', { active: v.value === tab }]"
        v-for="v in tabList"
        @click="onSelect(v)"
      >
        <span>{{ v.label }}</span>
      </div>
    </div>

    <div :class="`${name}-content`">
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
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const name = "doc-tabs";
const tabList = [
  { label: "示例", value: "demo" },
  { label: "API", value: "api" },
  { label: "指南", value: "guide" },
];
const tab = ref("demo");

const onSelect = (v: { label: string; value: string }) => {
  tab.value = v.value;
};
</script>
