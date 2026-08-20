<template>
  <div :class="[clsBlockName, { 'border-none': onlySelector }]">
    <div :class="`${clsBlockName}-body`">
      <template v-for="(items, index) in [hourList, minuteList, secondList]">
        <VirtualScroller
          list-class="time-col-scroller-list"
          list-tag="ul"
          :ref="(el: unknown) => (columnRefs[index] = el)"
          :class="`${clsBlockName}-time-col`"
          :items
          :item-size="32"
          key-field="value"
          v-slot="{ item }"
        >
          <li
            :class="[`${clsBlockName}-col-cell`, { active: item === globalValue[index] }]"
            @click="handleClick(index, item)"
          >
            <span :class="`${clsBlockName}-col-cell-inner`">{{ item }}</span>
          </li>
        </VirtualScroller>
      </template>
    </div>

    <div v-if="!onlySelector" :class="`${clsBlockName}-footer`">
      <bp-button size="mini" status="gray" type="secondary" @click="setNow">现在</bp-button>
      <bp-button :disabled="confirmDisabled" size="mini" type="normal" status="primary" @click="handleSelect">
        确认
      </bp-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useNamespace } from "@birdpaper-ui/hooks";
import BpButton from "@birdpaper-ui/components/button/index";
import { computed, inject, ref, watch } from "vue";
import type { Ref } from "vue";
import dayjs from "dayjs";
import { timeInjectionKey, TimePickerContext } from "../types";
import { timeTableProps, TimeTableProps } from "../props";

import VirtualScroller from "@birdpaper-ui/components/utils/virtual-scroller.vue";

defineOptions({ name: "TimeTable" });
const { clsBlockName } = useNamespace("time-table");
const ctx = ref<TimePickerContext>();

const props: TimeTableProps = defineProps(timeTableProps);
const emits = defineEmits(["select"]);

function generateArray(len: number): string[] {
  const result: string[] = [];
  for (let i = 0; i < len; i++) {
    result.push(i.toString().padStart(2, "0"));
  }
  return result;
}

const defaultValue = "00";
const hourList = generateArray(24);
const minuteList = generateArray(60);
const secondList = generateArray(60);

const columnRefs = ref([]) as Ref<any>;
ctx.value = inject(timeInjectionKey, undefined);

const globalValue = ref<string[]>(["", "", ""]);

const confirmDisabled = computed<boolean>(() => globalValue.value.filter((item) => item === "").length > 0);

const handleClick = (index: number, item: string) => {
  globalValue.value[index] = item;
  scrollTo(index, item);
  setDefault();
  emits("select", globalValue.value.join(":"));
};

const setDefault = () => {
  for (let i = 0; i < globalValue.value.length; i++) {
    const element = globalValue.value[i];

    if (!element) {
      globalValue.value[i] = defaultValue;
      scrollTo(i);
    }
  }
};

const setTime = (val: string) => {
  globalValue.value = val.split(":");

  for (let i = 0; i < globalValue.value.length; i++) {
    const item = globalValue.value[i];
    scrollTo(i, item);
  }
};

const setNow = () => {
  const now = dayjs().format("HH:mm:ss");
  setTime(now);

  if (!props.onlySelector) {
    ctx.value?.onSelect(now);
  }

  return now;
};

const scrollTo = (i: number, item: string = defaultValue) => columnRefs.value[i]?.scrollToItem(item);

const handleSelect = () => {
  if (!globalValue.value) return;

  const val = globalValue.value.join(":");
  ctx.value?.onSelect(val);
};

const getTime = (defaultNow: boolean = false) => {
  if (defaultNow && !globalValue.value[0]) {
    const now = dayjs().format("HH:mm:ss");
    setTime(now);
    return now;
  }

  return globalValue.value.join(":");
};

watch(
  () => ctx.value?.modelValue,
  () => {
    if (!ctx.value?.modelValue) return;

    globalValue.value = ["", "", ""];

    const arr = ctx.value?.modelValue.split(":");
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      globalValue.value[i] = Number(element).toString().padStart(2, "0");
    }
  },
  {
    immediate: true,
  }
);

defineExpose({
  globalValue,
  getTime,
  setTime,
  setNow,
});
</script>
