<template>
  <!-- <div>{{ stringValue }} <bp-button @click="handleStep">TEST</bp-button></div> -->
  <bp-input
    ref="inpRef"
    v-model="stringValue"
    :class="cls"
    :placeholder
    :disabled
    :readonly
    :size
    @input="onInput"
    @blur="onBlur"
  >
    <template #suffix v-if="!hideButton && !disabled">
      <div :class="`${clsBlockName}-step`">
        <div
          v-for="v in btnList"
          :class="[{ disabled: v.disabled }, `${clsBlockName}-step-item`]"
          @click="handleStep(v.type)"
        >
          <component :is="v.component"></component>
        </div>
      </div>
    </template>
  </bp-input>
</template>

<script setup lang="ts">
import { useNamespace } from "@birdpaper-ui/hooks";
import { computed, ref } from "vue";
import type { Component } from "vue";
import BpInput from "@birdpaper-ui/components/input/index";
import { inputNumberProps, InputNumberProps } from "./props";
import { IconArrowDownSLine, IconArrowUpSLine } from "birdpaper-icon";
import { useCounter, useToNumber } from "@vueuse/core";

defineOptions({ name: "InputNumber" });
const { clsBlockName } = useNamespace("inputNumber");

const model = defineModel<number>();
const stringValue = ref<string>("");

const props: InputNumberProps = defineProps(inputNumberProps);
const emits = defineEmits(["input", "focus", "blur"]);

const cls = computed<string[] | {}[]>(() => [clsBlockName, `${clsBlockName}-${props.size}`]);

const isMin = computed(() => Number(stringValue.value) <= props.min);
const isMax = computed(() => Number(stringValue.value) >= props.max);
const mergePrecision = computed<number>(() => {
  const stepPrecision = (props.step?.toString() || "").split(".")[1]?.length || 0;
  return props.precision ? Math.max(props.precision, stepPrecision) : stepPrecision;
});

const btnList: { type: "up" | "down"; disabled: boolean; component: Component }[] = [
  { type: "up", disabled: isMax.value, component: IconArrowUpSLine },
  { type: "down", disabled: isMin.value, component: IconArrowDownSLine },
];

const { count, inc, dec, set } = useCounter(model.value || 0, {
  min: props.min,
  max: props.max,
});

const handleStep = (type: "up" | "down") => {
  if (props.hideButton || !props.step) return;
  inpRef.value?.focus();

  set(model.value ?? 0);
  const step = props.step;
  type === "up" ? inc(step) : dec(step);

  stringValue.value = getStringValue(count.value);
  updateModelValue();
};

const getStringValue = (val = model.value): string => {
  let _val = val;

  if (!mergePrecision.value || mergePrecision.value < 0) {
    return _val + "";
  }

  return Number(_val).toFixed(mergePrecision.value);
};

const updateModelValue = () => {
  model.value = useToNumber(stringValue.value, {
    nanToZero: props.nanToZero,
  }).value;
};

const inpRef = ref();
const focus = () => inpRef.value?.focus();
const blur = () => inpRef.value?.blur();
const onBlur = () => {
  stringValue.value =
    set(
      useToNumber(stringValue.value, {
        nanToZero: props.nanToZero,
      }).value
    ) + "";

  updateModelValue();
  emits("blur");
};

const onInput = (e: Event) => {
  const regex = /^-?[0-9]*\.?[0-9]*$/;
  const value = (e.target as HTMLInputElement).value;

  if (!regex.test(value)) {
    (e.target as HTMLInputElement).value = stringValue.value;
    return;
  }

  stringValue.value = value;
  if (props.modelEvent === "input") {
    updateModelValue();
  }
};

stringValue.value = getStringValue();

defineExpose({
  focus,
  blur,
  getStringValue,
});
</script>
