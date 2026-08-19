<template>
  <div :class="[clsBlockName, 'select-none']">
    <div class="date-area">
      <table-header>
        <template #inner>
          <span @click.stop="changePicker('year')" v-text="currentYear" />
          <span @click.stop="changePicker('month')" v-text="months[currentMonth]" />
        </template>
        <template #option="{ optionList }">
          <component v-for="v in optionList" :is="v.icon" size="22" @click="handleStep(v.step, v.type)" />
        </template>
      </table-header>

      <bp-space :size="2" :class="`${clsBlockName}-week`">
        <span v-for="v in weeks" :class="`${clsBlockName}-week-inner`">{{ v }}</span>
      </bp-space>

      <div :class="`${clsBlockName}-body`">
        <bp-space v-for="row in dates" :size="2" :class="`${clsBlockName}-body-row`">
          <span v-for="col in row" :class="cellCls(col)" @click="handleSelect(col)">
            {{ col.label }}
          </span>
        </bp-space>
      </div>
    </div>

    <div v-if="ctx?.showTime" class="time-area">
      <div class="time-area-header">选择时间</div>
      <time-table
        v-if="ctx?.showTime"
        ref="timeTableRef"
        only-selector
        :style="{ height: '270px' }"
        @select="onTimeSelect"
      />
    </div>
  </div>

  <div :class="`${clsBlockName}-footer`" :style="{ 'justify-content': ctx?.showTime ? 'space-between' : 'center' }">
    <template v-if="ctx?.showTime">
      <bp-button size="small" status="gray" type="secondary" @click="setNow"> 此刻 </bp-button>
      <bp-button type="normal" size="small" status="primary" @click="confirmValue"> 确定 </bp-button>
    </template>
    <bp-button v-else type="text" status="primary" @click="handleSelect(toDay)"> 今天 </bp-button>
  </div>
</template>

<script lang="ts" setup>
import { useNamespace } from "@birdpaper-ui/hooks";
import { ref, inject, onMounted } from "vue";
import { DatePickerContext, DayCell, PanelType, dateInjectionKey } from "../types";
import tableHeader from "./table-header.vue";
import BpButton from "@birdpaper-ui/components/button/index";
import BpSpace from "@birdpaper-ui/components/space/index";
import { TimeTable } from "@birdpaper-ui/components/timePicker/index";
import { useDayJs } from "../core";
import dayjs from "dayjs";

defineOptions({ name: "DateTable" });
const { clsBlockName } = useNamespace("date-table");

const emits = defineEmits(["change-picker"]);

const ctx = ref<DatePickerContext>();
ctx.value = inject(dateInjectionKey, undefined);
const cellCls = (cell: DayCell) => [
  `${clsBlockName.value}-body-inner`,
  `day-cell-${cell.type}`,
  { active: (!!ctx.value!.model || ctx.value!.showTime) && currentVal.value === cell.value },
  { "to-day": toDay.value === cell.value },
  { "cell-disabled": ctx.value?.disableDate && ctx.value.disableDate(cell.value) },
];

const displayModel = ctx.value!.panelValue || ctx.value!.model;
const { toDay, current, currentMonth, currentYear, dates, setDates, changeMonth, changeYear, weeks, months } = useDayJs(
  ctx.value!.langs,
  displayModel
);

const currentVal = ref(ctx.value!.model ? dayjs(ctx.value!.model).format("YYYY-MM-DD") : "");
const currentTimeVal = ref(ctx.value!.model && ctx.value?.showTime ? dayjs(ctx.value!.model).format("HH:mm:ss") : "");
setDates();

const timeTableRef = ref();
const handleSelect = (date: DayCell) => {
  if (ctx.value?.disableDate?.(date.value)) return;

  currentVal.value = date.value;
  current.value = dayjs(currentVal.value);
  setDates();

  if (ctx.value!.showTime) {
    if (!currentTimeVal.value) {
      const existing = timeTableRef.value?.getTime?.(false);
      if (existing && !existing.split(":").some((part: string) => part === "")) {
        currentTimeVal.value = existing;
      } else {
        const now = dayjs().format("HH:mm:ss");
        timeTableRef.value?.setTime?.(now);
        currentTimeVal.value = now;
      }
    }
    return;
  }

  const val = dayjs(currentVal.value).format(ctx.value!.valueFormat);
  ctx.value!.onSelect(val, {}, true);
};

const onTimeSelect = (time: string) => {
  if (!currentVal.value) {
    if (ctx.value?.disableDate?.(toDay.value)) return;
    currentVal.value = toDay.value;
    current.value = dayjs(currentVal.value);
    setDates();
  }
  currentTimeVal.value = time;
};

/** Set current time (in `show-time` mode) */
const setNow = () => {
  if (ctx.value?.disableDate?.(toDay.value)) return;
  currentVal.value = toDay.value;
  current.value = dayjs(currentVal.value);
  setDates();
  currentTimeVal.value = timeTableRef.value.setNow();
};

/**
 * 月份/年份切换
 * @param mode 切换模式
 * @param type 类型
 * @param step 跨度
 */
const handleStep = (mode: "month" | "year", type: "prev" | "next", step: number = 1) => {
  const value = mode === "month" ? currentMonth.value : currentYear.value;
  const newValue = type === "next" ? value + step : value - step;
  (mode === "month" ? changeMonth : changeYear)(newValue);
  setDates();
};

/**
 * Change picker panel.
 * @param typeName PanelType
 */
const changePicker = (typeName: PanelType) => {
  let val = currentYear.value;

  if (typeName === "month") {
    val = currentMonth.value;
  }
  emits("change-picker", typeName, val);
};

const confirmValue = () => {
  if (!currentVal.value) return;
  if (ctx.value?.disableDate?.(currentVal.value)) return;

  const time = currentTimeVal.value || dayjs().format("HH:mm:ss");
  const val = dayjs(`${currentVal.value} ${time}`).format(ctx.value!.valueFormat);
  ctx.value!.onSelect(val, {}, true);
  return val;
};

onMounted(() => {
  if (currentTimeVal.value) {
    timeTableRef.value && timeTableRef.value.setTime(currentTimeVal.value);
  }
});
</script>
