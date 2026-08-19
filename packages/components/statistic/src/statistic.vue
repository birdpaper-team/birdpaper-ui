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
import { computed, onBeforeUnmount, ref, watch } from "vue";
import { statisticProps, StatisticProps } from "./props";
import { useNamespace } from "@birdpaper-ui/hooks";
import { isArray, isNumber } from "radash";
import { formatNumberWithCommas } from "@birdpaper-ui/components/utils/number";

defineOptions({ name: "Statistic" });
const { clsBlockName } = useNamespace("statistic");

const model = defineModel<number>();
const props: StatisticProps = defineProps(statisticProps);
const slots = defineSlots();

const intText = ref<string>("");
const decText = ref<string>("");
const isAnimating = ref(false);
let rafId: number | null = null;

const currentValue = computed(() => {
  if (model.value !== undefined && model.value !== null) return model.value;
  return props.value;
});

const init = () => {
  const value = currentValue.value;
  if (value === undefined || value === null || !isNumber(value)) {
    intText.value = props.placeholder;
    decText.value = "";
    return;
  }
  if (props.animation && typeof requestAnimationFrame === "function") {
    startAnimation();
  } else {
    updateValue(value);
  }
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

const innerFontSize = computed(() => {
  if (isArray(props.fontSize)) {
    return props.fontSize;
  }
  return [props.fontSize, props.fontSize];
});

const cancelAnimation = () => {
  if (rafId !== null && typeof cancelAnimationFrame === "function") {
    cancelAnimationFrame(rafId);
    rafId = null;
  }
  isAnimating.value = false;
};

const startAnimation = () => {
  if (!props.animation || typeof requestAnimationFrame !== "function") {
    const value = currentValue.value;
    if (value !== undefined && value !== null && isNumber(value)) updateValue(value);
    return;
  }

  const endValue = currentValue.value;
  if (endValue === undefined || endValue === null || !isNumber(endValue)) return;

  cancelAnimation();
  isAnimating.value = true;
  const startValue = props.valueFrom || 0;
  const duration = props.duration;

  const step = (timestamp: number, startTime: number) => {
    const progress = Math.min((timestamp - startTime) / duration, 1);
    updateValue(startValue + (endValue - startValue) * progress);
    if (progress < 1) {
      rafId = requestAnimationFrame((t) => step(t, startTime));
    } else {
      rafId = null;
      isAnimating.value = false;
    }
  };

  rafId = requestAnimationFrame((t) => step(t, performance.now()));
};

watch(
  currentValue,
  () => {
    init();
  },
  { immediate: true }
);

onBeforeUnmount(() => {
  cancelAnimation();
});
</script>
