<template>
  <div :class="name">
    <div :class="`${name}-wrapper`">
      <component :is="tableMap[currentTable]" @change-picker="onChangePicker"></component>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import dateTable from "./components/date-table.vue";
import monthTable from "./components/month-table.vue";
// import yearTable from "./components/year-table.vue";
import { PanelType } from "./types";

const name = "bp-date-picker-panel";
const currentTable = ref<string>("date");
const tableMap = {
  date: dateTable,
  month: monthTable,
  // year: yearTable,
};

const onChangePicker = (typeName: PanelType, val: number) => {
  currentTable.value = typeName;
};
</script>
