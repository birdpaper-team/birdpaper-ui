<template>
  <div :class="name">
    <div :class="`${name}-header`">
      <span :class="`${name}-header-inner`"> 选择时间 </span>
    </div>
    <div :class="`${name}-body`">
      <template v-for="(items, index) in [hourList, minuteList, secondList]">
        <RecycleScroller
          listClass="time-col-scroller-list"
          :ref="(el) => (typeRefs[index] = el)"
          :class="`${name}-time-col`"
          :items="items"
          :item-size="28"
          v-slot="{ item }">
          <div :class="[`${name}-col-cell`, { active: item === globalValue[index] }]">
            <span :class="`${name}-col-cell-inner`">{{ item }}</span>
          </div>
        </RecycleScroller>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { generateArray } from "../../../../utils/util";
// @ts-ignore
import { RecycleScroller } from "vue-virtual-scroller";
import "vue-virtual-scroller/dist/vue-virtual-scroller.css";
import dayjs from "dayjs";
import { Ref, ref } from "vue";
const name = "bp-date-time-table";

const typeRefs = ref([]) as Ref<any>;
const defaultValue = "00";
const hourList = generateArray(24);
const minuteList = generateArray(60);
const secondList = generateArray(60);

const globalValue = ref<string[]>(["", "", ""]);
/** 设置当前时间 */
const setNow = () => {
  const now = dayjs().format("HH:mm:ss");
  globalValue.value = now.split(":");

  for (let i = 0; i < globalValue.value.length; i++) {
    const item = globalValue.value[i];
    scrollTo(i, item);
  }

  handleSelect();
};

const handleSelect = () => {
  // ctx.value.onSelect(globalValue.value.join(":"));
};

/**
 * 将选中值滚动到顶部
 * @param i 类型下标
 * @param item 值
 */
const scrollTo = (i: number, item: string = defaultValue) => typeRefs.value[i].scrollToItem(item);

const getTime = () => {
  // if (!globalValue.value) {
  setNow();
  // }
  return globalValue.value.join(":");
};

defineExpose({
  getTime,
});
</script>
