<template>
  <div :class="name">
    <component :is="tableComponent[type]" :data></component>
  </div>
</template>

<script setup lang="ts">
import { PropType } from "vue";
import { ApiType, PropItem } from "./types";
import propsTable from "./components/props-table.vue";

const name = "api-block";
const props = defineProps({
  type: { type: String as PropType<ApiType>, default: "prop" },
  data: { type: Array as PropType<PropItem[]>, default: () => [] },
});

const tableComponent = {
  prop: propsTable,
};
</script>
