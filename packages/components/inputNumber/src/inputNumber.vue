<template>
  <bp-input
    ref="inpRef"
    v-model="stringValue"
    :id
    :name
    :class="cls"
    :placeholder
    :disabled
    :readonly
    :size
    @input="onInput"
    @blur="onBlur"
    @change="onChange"
  >
    <template #suffix v-if="!hideButton && !disabled && !readonly">
      <div :class="`${clsBlockName}-step`">
        <button
          v-for="v in btnList"
          :key="v.type"
          type="button"
          :class="[{ disabled: v.disabled }, `${clsBlockName}-step-item`]"
          :disabled="v.disabled"
          :aria-label="v.type === 'up' ? 'Increase' : 'Decrease'"
          @click="handleStep(v.type)"
        >
          <component :is="v.component"></component>
        </button>
      </div>
      <span v-if="unit" :class="`${clsBlockName}-unit`">{{ unit }}</span>
    </template>
  </bp-input>
</template>

<script setup lang="ts">
import { useNamespace } from "@birdpaper-ui/hooks";
import { computed, ref, watch } from "vue";
import type { Component } from "vue";
import BpInput from "@birdpaper-ui/components/input/index";
import { inputNumberProps, InputNumberProps } from "./props";
import { IconArrowDownSLine, IconArrowUpSLine } from "birdpaper-icon";

defineOptions({ name: "InputNumber" });
const { clsBlockName } = useNamespace("input-number");

const model = defineModel<number | "">({ default: "" });
const stringValue = ref<string>("");

const props: InputNumberProps = defineProps(inputNumberProps);
const emits = defineEmits(["input", "change", "focus", "blur", "step"]);

const cls = computed<string[] | {}[]>(() => [clsBlockName.value, `${clsBlockName.value}-${props.size}`]);

const toNumber = (val: string | number | "", nanToZero = false): number | typeof NaN => {
  if (val === "" || val === "-" || val === ".") return nanToZero ? 0 : Number.NaN;
  const num = typeof val === "number" ? val : Number.parseFloat(val);
  if (Number.isNaN(num)) return nanToZero ? 0 : Number.NaN;
  return num;
};

const clamp = (val: number) => Math.min(props.max, Math.max(props.min, val));

const isMin = computed(() => {
  const val = toNumber(stringValue.value);
  return !Number.isNaN(val) && val <= props.min;
});
const isMax = computed(() => {
  const val = toNumber(stringValue.value);
  return !Number.isNaN(val) && val >= props.max;
});

const mergePrecision = computed<number>(() => {
  const stepPrecision = (props.step?.toString() || "").split(".")[1]?.length || 0;
  if (props.precision === undefined || props.precision === null) return stepPrecision;
  return Math.max(props.precision, stepPrecision);
});

const btnList = computed<{ type: "up" | "down"; disabled: boolean; component: Component }[]>(() => [
  { type: "up", disabled: isMax.value, component: IconArrowUpSLine },
  { type: "down", disabled: isMin.value, component: IconArrowDownSLine },
]);

const getStringValue = (val: number | "" | undefined = model.value): string => {
  if (val === "" || val === undefined || Number.isNaN(Number(val))) return "";

  const precision = mergePrecision.value;
  if (props.precision === 0 || precision > 0) {
    const digits = props.precision === 0 ? 0 : precision;
    return Number(val).toFixed(digits);
  }

  return String(val);
};

const updateModelValue = (raw = stringValue.value) => {
  if (raw === "" || raw === "-" || raw === ".") {
    model.value = "";
    return;
  }
  const num = toNumber(raw, props.nanToZero);
  model.value = Number.isNaN(num) ? (props.nanToZero ? 0 : (Number.NaN as unknown as number)) : num;
};

const commitNumber = (val: number) => {
  const next = clamp(val);
  stringValue.value = getStringValue(next);
  model.value = next;
  return next;
};

const handleStep = (type: "up" | "down") => {
  if (props.hideButton || !props.step || props.disabled || props.readonly) return;
  inpRef.value?.focus();

  const current = toNumber(model.value === "" || model.value === undefined ? stringValue.value : model.value, true);
  const delta = type === "up" ? props.step : -props.step;
  const next = commitNumber(current + delta);

  emits("step", next);
  emits("change", next);
};

const inpRef = ref();
const focus = () => inpRef.value?.focus();
const blur = () => inpRef.value?.blur();

const onBlur = () => {
  if (stringValue.value === "" || stringValue.value === "-" || stringValue.value === ".") {
    if (!props.nanToZero) {
      model.value = "";
      stringValue.value = "";
      return emits("blur");
    }
  }

  const num = toNumber(stringValue.value, props.nanToZero);
  if (!Number.isNaN(num)) {
    commitNumber(num);
  } else if (props.nanToZero) {
    commitNumber(0);
  }

  emits("blur");
  if (props.modelEvent === "change") {
    emits("change", model.value);
  }
};

const onInput = ({ e }: { e: Event }) => {
  const regex = /^-?[0-9]*\.?[0-9]*$/;
  const value = (e.target as HTMLInputElement).value;

  if (!regex.test(value)) {
    (e.target as HTMLInputElement).value = stringValue.value;
    return;
  }

  stringValue.value = value;
  if (props.modelEvent === "input") {
    updateModelValue(value);
    emits("input", model.value);
  }
};

const onChange = () => {
  if (props.modelEvent === "change") {
    updateModelValue();
    emits("change", model.value);
  }
};

watch(
  () => model.value,
  () => {
    if (typeof document !== "undefined") {
      const active = document.activeElement;
      const inputEl = inpRef.value?.$el?.querySelector?.("input");
      if (active && inputEl && active === inputEl) return;
    }
    stringValue.value = model.value === "" || Number.isNaN(Number(model.value)) ? "" : getStringValue();
  },
  { immediate: true }
);

defineExpose({
  focus,
  blur,
  getStringValue,
});
</script>
