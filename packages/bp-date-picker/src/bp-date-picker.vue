<template>
  <div class="bp-date-picker" v-click-outside="onClose">
    <bp-input
      placeholder="选择日期"
      readonly
      @focus="onOpen"
      v-model="modelValue"
    ></bp-input>

    <transition name="option-slide">
      <div class="bp-picker-inner" v-if="state.visibled">
        <div class="picker-arrow"></div>

        <div class="bp-picker-box">
          <div class="bp-picker-select">
            <div class="picker-select-left">
              <bp-button
                @click="onMonthChange('reduce')"
                icon="ri-arrow-left-s-line"
              ></bp-button>
            </div>
            <div class="picker-select-middle">
              <p class="picker-select-year">{{ state.year }}年</p>
              <p class="picker-select-month">
                {{ state.months[state.month - 1].cn }}
              </p>
            </div>
            <div class="picker-select-right">
              <bp-button
                @click="onMonthChange('add')"
                icon="ri-arrow-right-s-line"
              ></bp-button>
            </div>
          </div>

          <div class="day-screen">
            <div class="screen-item sec-week">
              <span
                class="sec-week-item"
                v-for="(item, index) in state.weeks"
                :key="`week-${index}`"
              >
                {{ item["cn"] }}
              </span>
            </div>

            <div class="screen-item sec-days">
              <template
                v-for="(item, index) in state.days"
                :key="`day-${index}`"
              >
                <span
                  @click="onSelectDay(item)"
                  :class="[
                    'day-item',
                    `${item.type}-month`,
                    isActive(item.day, item.month),
                    isToday(item.day, item.month),
                  ]"
                >
                  {{ item.day }}
                </span>
              </template>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "bp-date-picker",
  directives: { clickOutside },
};
</script>
<script setup>
import { clickOutside } from "../../utils/util.js";
import { defineProps, defineEmits, watch, reactive, computed } from "vue";

const emit = defineEmits(["update:modelValue"]);
const props = defineProps({
  modelValue: { type: String, default: "" },
});

const state = reactive({
  visibled: false,
  year: 2001,
  month: 1,
  day: 1,
  toYear: 2001,
  toMonth: 1,
  today: 1,
  prevMonth: [],
  nextMonth: [],
  days: [],
  weeks: [
    { cn: "日", en: "Sun" },
    { cn: "一", en: "Mon" },
    { cn: "二", en: "Tud" },
    { cn: "三", en: "Wen" },
    { cn: "四", en: "Thu" },
    { cn: "五", en: "Fri" },
    { cn: "六", en: "Sat" },
  ],
  months: [
    { cn: "一月", en: "January", as: "Jun", days: 31 },
    { cn: "二月", en: "February", as: "Feb", days: 28 },
    { cn: "三月", en: "March", as: "Mar", days: 31 },
    { cn: "四月", en: "April", as: "Apr", days: 30 },
    { cn: "五月", en: "May", as: "May", days: 31 },
    { cn: "六月", en: "June", as: "Jun", days: 30 },
    { cn: "七月", en: "July", as: "Jul", days: 31 },
    { cn: "八月", en: "August", as: "Aug", days: 31 },
    { cn: "九月", en: "September", as: "Sep", days: 30 },
    { cn: "十月", en: "October", as: "Oct", days: 31 },
    { cn: "十一月", en: "November", as: "Nov", days: 30 },
    { cn: "十二月", en: "December", as: "Dec", days: 31 },
  ],
});

const isActive = (day, month) => {
  const { modelValue = "" } = props;
  if (!modelValue) return;
  const val = modelValue.split("-");

  if (
    day === Number(state.day) &&
    Number(val[1]) === Number(month) &&
    Number(val[0]) === Number(state.year)
  ) {
    return {
      active: true,
    };
  }
};

const isToday = (day, month) => {
  if (
    Number(state.today) === day &&
    Number(month) === Number(state.toMonth) &&
    Number(state.year) === Number(state.toYear)
  ) {
    return {
      "active-today": true,
    };
  }
};

// 显示日期盒子并初始化
const onOpen = () => {
  let date = new Date();
  state.toYear = date.getFullYear();
  state.toMonth = date.getMonth() + 1;
  state.today = date.getDate();
  if (!props.modelValue) {
    state.year = date.getFullYear();
    state.months[1].days = isLeapYear(state.year) ? 29 : 28;
    state.month = date.getMonth() + 1;
  } else {
    const { modelValue } = props;
    const val = modelValue.split("-");
    state.year = val[0];
    state.month = val[1];
    state.day = val[2];
  }

  renderScreen();
  state.visibled = true;
};

const onClose = () => {
  state.visibled = false;
};

/**
 * 触发月份改变
 * type: specify-指定月份，add-月份增加，reduce-月份减少
 * month: 指定月份
 */
const onMonthChange = (type = "specify", month = "") => {
  const isSpecify = type === "specify";
  if (!month && isSpecify) return;

  let m = state.month;
  if (isSpecify) m = month;
  if (type === "add") m++;
  if (type === "reduce") m--;

  if (isSpecify && (m < 1 || m > 12)) m = 1;
  if (!isSpecify) {
    if (m > 12) {
      m = 1;
      onYearChange("add");
    }
    if (m < 1) {
      m = 12;
      onYearChange("reduce");
    }
  }
  state.month = m;

  return renderScreen();
};

/**
 * 触发年份改变
 * type: specify-指定年份，add-年份增加，reduce-年份减少
 * year: 指定年份
 */
const onYearChange = (type = "specify", year = "") => {
  const isSpecify = type === "specify";
  if (!year && isSpecify) return;

  let y = state.year;
  if (type === "specify") m = year;
  if (type === "add") y++;
  if (type === "reduce") y--;

  if (y < 1000 || y > 3000) y = 1000;

  return (state.year = y);
};

// 选择日期
const onSelectDay = (item = {}) => {
  state.day = item.day;
  if (item.type === "prev") {
    if (state.month == 1) {
      state.month = 12;
      state.year--;
    } else {
      state.month = state.month - 1;
    }
  } else if (item.type === "next") {
    if (state.month == 12) {
      state.month = 1;
      state.year++;
    } else {
      state.month = state.month + 1;
    }
  }

  emit("update:modelValue", `${state.year}-${state.month}-${state.day}`);
  onClose();
};

const renderScreen = () => {
  let arr = [];
  const { month } = state;

  const startWeek = new Date(state.year, state.month - 1, 1).getDay(); // 当月起始周
  const prevMonth = state.months[month === 1 ? 11 : month - 2];
  const prevLen =
    startWeek == 0 ? prevMonth.days - 7 : prevMonth.days - startWeek;

  for (let i = prevLen; i < prevMonth.days; i++) {
    arr.push({ month: month === 1 ? 12 : month - 1, day: i + 1, type: "prev" });
  }

  for (let i = 0; i < state.months[state.month - 1].days; i++) {
    arr.push({ month: Number(month), day: i + 1, type: "current" });
  }

  const nextLen = 42 - arr.length;
  for (let i = 0; i < nextLen; i++) {
    arr.push({ month: Number(month) + 1, day: i + 1, type: "next" });
  }
  state.days = arr;
};

// 判断是否是闰年
const isLeapYear = (year) => {
  return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
};
</script>
