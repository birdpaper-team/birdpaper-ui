<template>
  <div :class="name">
    <component :is="tableComponent[type]" :data @copy="handleCopy"></component>
  </div>
</template>

<script setup lang="ts">
import { PropType } from "vue";
import { ApiType, PropItem } from "./types";
import propsTable from "./components/props-table.vue";
import eventTable from "./components/event-table.vue";
import slotTable from "./components/slot-table.vue";
import methodTable from "./components/method-table.vue";

const name = "api-block";
const props = defineProps({
  type: { type: String as PropType<ApiType>, default: "prop" },
  data: { type: Array as PropType<PropItem[]>, default: () => [] },
});

const tableComponent = {
  prop: propsTable,
  event: eventTable,
  slot: slotTable,
  method: methodTable,
};

const handleCopy = (text: string) => {
  // TODO
};
</script>
