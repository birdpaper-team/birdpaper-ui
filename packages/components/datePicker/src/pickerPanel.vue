<template>
  <div :class="name">
    <div :class="`${name}-wrapper`">
      <component :is="tableMap[currentTable]" @change-picker="onChangePicker"></component>
    </div>
    <div :class="`${name}-footer`" v-if="ctx.showTime && currentTable === 'date'">
      <bp-button size="mini">此刻</bp-button>
      <bp-button size="mini" type="primary" status="primary">确定</bp-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { inject, ref } from "vue";
import dateTable from "./components/date-table.vue";
import monthTable from "./components/month-table.vue";
import yearTable from "./components/year-table.vue";
import { dateInjectionKey, DatePickerContext, PanelType } from "./types";

const name = "bp-date-picker-panel";
const currentTable = ref<string>("date");
const tableMap = {
  date: dateTable,
  month: monthTable,
  year: yearTable,
};

let ctx: DatePickerContext = null;
ctx = inject(dateInjectionKey);

const onChangePicker = (typeName: PanelType) => {
  currentTable.value = typeName;
};
</script>
