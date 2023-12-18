<template>
  <div :class="name">
    <div :class="`${name}-header`">
      <IconArrowLeftDoubleFill size="20px" />
      <IconArrowLeftSLine size="20px" />
      <span :class="`${name}-header-inner`">2024 - 12</span>
      <IconArrowRightSLine size="20px" />
      <IconArrowRightDoubleFill size="20px" />
    </div>
    <div :class="`${name}-week`">
      <span :class="`${name}-week-inner`" v-for="v in weeks">{{ v }}</span>
    </div>
    <div :class="`${name}-body`"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import {
  IconArrowLeftSLine,
  IconArrowRightSLine,
  IconArrowLeftDoubleFill,
  IconArrowRightDoubleFill,
} from "birdpaper-icon";

export default defineComponent({
  name: "DateTable",
  components: { IconArrowLeftSLine, IconArrowRightSLine, IconArrowLeftDoubleFill, IconArrowRightDoubleFill },
  setup() {
    const name = "bp-date-table";

    const weeks = ["日", "一", "二", "三", "四", "五", "六"];
    const days = ref([[], [], [], [], [], []]);

    return {
      name,
      weeks,
      days
    };
  },
});
</script>
