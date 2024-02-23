<template>
  <div :class="name">
    <div :class="`${name}-header`">
      <div :class="`${name}-header-inner`">year</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, inject } from "vue";
import { DatePickerContext, DayCell, dateInjectionKey } from "../types";
import { useDayJs } from "../core";

export default defineComponent({
  name: "YearTable",
  setup(props) {
    const name = "bp-year-table";

    return {
      name,
    };
  },
});
</script>
