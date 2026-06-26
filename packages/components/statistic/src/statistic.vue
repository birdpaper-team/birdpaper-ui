<template>
  <div :class="clsBlockName" :style="`color:${color};fill:${color}`">
    <span v-if="slots.prefix" :class="`${clsBlockName}-prefix`">
      <slot name="prefix"></slot>
    </span>
    <span :class="`${clsBlockName}-int`" :style="`font-size: ${innerFontSize[0]}`">{{ intText }}</span>
    <span v-if="decText" :class="`${clsBlockName}-dev`" :style="`font-size: ${innerFontSize[1]}`">{{ decText }}</span>
    <span v-if="unit" :class="`${clsBlockName}-unit`">{{ unit }}</span>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref, watch } from "vue";
import { statisticProps, StatisticProps } from "./props";
import { useNamespace } from "@birdpaper-ui/hooks";
import { isArray, isFloat, isNumber, toInt } from "radash";
import { formatNumberWithCommas } from "@birdpaper-ui/components/utils/number";

defineOptions({ name: "Statistic" });
const { clsBlockName } = useNamespace("statistic");

const model = defineModel<number>();
const props: StatisticProps = defineProps(statisticProps);
const slots = defineSlots();

const intText = ref<string>("");
const decText = ref<string>("");

const init = () => {
  if (model.value === undefined || model.value === null || !isNumber(model.value)) {
    intText.value = props.placeholder;
    decText.value = "";
    return;
  }
  updateValue(model.value);
  props.animation && startAnimation();
};

const updateValue = (value: number) => {
  const precision = props.precision || 0;
  const rounded = Number(value).toFixed(precision);
  const parts = rounded.split(".");

  let intVal = parts[0] || "0";
  if (props.showSeparator) {
    intVal = formatNumberWithCommas(Number(intVal), props.separator);
  }
  intText.value = intVal;

  if (precision > 0) {
    decText.value = `.${parts[1] || "0".repeat(precision)}`;
  } else {
    decText.value = "";
  }
};

const getIntText = (value: number): string => {
  let val: string = "";
  if (isNumber(value)) {
    val = toInt(value).toString();
  }

  if (props.showSeparator) {
    val = formatNumberWithCommas(Number(val), props.separator);
  }

  return val;
};

const getDecimalText = (value: number): string => {
  const fixed = Number(value).toFixed(props.precision);
  const parts = fixed.split(".");
  return parts[1] ? `.${parts[1]}` : `.${"0".repeat(props.precision)}`;
};

const innerFontSize = computed(() => {
  if (isArray(props.fontSize)) {
    return props.fontSize;
  }
  return [props.fontSize, props.fontSize];
});

const isAnimating = ref(false);

const startAnimation = () => {
  isAnimating.value = false;
  if (isAnimating.value || !props.animation) return;

  isAnimating.value = true;
  const startValue = props.valueFrom || 0;
  const endValue = model.value as number;
  const duration = props.duration;

  const step = (timestamp: number, startTime: number) => {
    const progress = Math.min((timestamp - startTime) / duration, 1);
    updateValue(startValue + (endValue - startValue) * progress);
    if (progress < 1) {
      requestAnimationFrame((t) => step(t, startTime));
    } else {
      isAnimating.value = false;
    }
  };

  requestAnimationFrame((t) => step(t, performance.now()));
};

watch(
  () => model.value,
  () => {
    init();
  },
  { immediate: true }
);
</script>
