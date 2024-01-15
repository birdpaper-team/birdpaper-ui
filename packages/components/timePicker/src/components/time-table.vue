<template>
  <div :class="name">
    <div :class="`${name}-body`">
      <template v-for="items in [hourList, minuteList, secondList]">
        <RecycleScroller :class="`${name}-time-col`" :items="items" :item-size="32" v-slot="{ item }">
          <div :class="`${name}-col-cell`">
            <span :class="`${name}-col-cell-inner`">{{ item }}</span>
          </div>
        </RecycleScroller>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, inject } from "vue";
import { generateArray } from "../../../../utils/util";
// @ts-ignore
import { RecycleScroller } from "vue-virtual-scroller";
import "vue-virtual-scroller/dist/vue-virtual-scroller.css";

export default defineComponent({
  name: "TimeTable",
  components: { RecycleScroller },
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
