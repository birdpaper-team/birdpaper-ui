<template>
  <div :class="[clsBlockName, 'select-none']">
    <div :class="`${clsBlockName}-area`">
      <begin-selector
        ref="beginSelectorRef"
        v-model:begin="ctx!.model[0]"
        v-model:end="ctx!.model[1]"
        :clsBlockName
        :option-slice="beginOptionSlice"
        :langs="ctx!.langs"
        :disabled-date="ctx?.disableDate"
        @on-step="onStep"
        @on-select="onSelect"
      />
    </div>

    <div :class="`${clsBlockName}-area`">
      <end-selector
        ref="endSelectorRef"
        v-model:begin="ctx!.model[0]"
        v-model:end="ctx!.model[1]"
        :clsBlockName
        :option-slice="endOptionSlice"
        :langs="ctx!.langs"
        :disabled-date="ctx?.disableDate"
        @on-step="onStep"
        @on-hover="onEndHover"
        @on-select="onSelect"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useNamespace } from "@birdpaper-ui/hooks";
import { ref, inject } from "vue";
import beginSelector from "./components/begin-selector.vue";
import endSelector from "./components/end-selector.vue";
import { DayCell, RangePickerContext, rangeInjectionKey } from "../../types";

defineOptions({ name: "RangeTable" });
const { clsBlockName } = useNamespace("range-table");

const ctx = ref<RangePickerContext>();
ctx.value = inject(rangeInjectionKey, undefined);

const beginSelectorRef = ref<typeof beginSelector>(beginSelector);
const endSelectorRef = ref<typeof endSelector>(endSelector);

const calculateMonthDifference = (
  [beginYear, beginMonth]: [number, number],
  [endYear, endMonth]: [number, number]
): number | null => {
  if (beginYear < 0 || beginMonth < 1 || beginMonth > 12 || endYear < 0 || endMonth < 1 || endMonth > 12) return null;
  return (endYear - beginYear) * 12 + (endMonth - beginMonth);
};
const beginOptionSlice = ref(2);
const endOptionSlice = ref(-2);
const onStep = () => {
  const { year: beginYear, month: beginMonth } = beginSelectorRef.value;
  const { year: endYear, month: endMonth } = endSelectorRef.value;

  const monthDifference = calculateMonthDifference([beginYear, beginMonth + 1], [endYear, endMonth + 1]);
  if (monthDifference === null) return;

  beginOptionSlice.value = 2;
  endOptionSlice.value = -2;

  if (monthDifference > 1) {
    beginOptionSlice.value = monthDifference <= 12 ? 3 : 4;
    endOptionSlice.value = monthDifference <= 12 ? -3 : -4;
  }
};

const onEndHover = (date?: DayCell) => {
  beginSelectorRef.value.hoverDate = date;
};

const onSelect = () => {
  if (ctx.value) {
    ctx.value.onSelect(ctx.value.model, {}, true);
  }
};
</script>
