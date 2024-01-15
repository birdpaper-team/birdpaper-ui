<template>
  <div :class="name">
    <div :class="`${name}-body`">
      <div :class="`${name}-time-col`" v-for="items in [hourList, minuteList, secondList]">
        <div :class="`${name}-col-cell`" v-for="(v, k) in items">
          <span :class="`${name}-col-cell-inner`">{{ v }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, inject } from "vue";
import { generateArray } from "../../../../utils/util";

export default defineComponent({
  name: "TimeTable",
  setup(props) {
    const name = "bp-time-table";
    const ctx = ref<any>();

    const hourList = generateArray(24);
    const minuteList = generateArray(60);
    const secondList = generateArray(60);

    return {
      ctx,
      name,
      hourList,
      minuteList,
      secondList,
    };
  },
});
</script>
