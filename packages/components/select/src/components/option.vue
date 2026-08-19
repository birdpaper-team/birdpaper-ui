<template>
  <li :class="cls" role="option" :aria-selected="isActive" @click="handleClick">
    <bp-checkbox v-if="ctx?.multiple" v-model:check="isChecked" />
    <div :class="`${clsBlockName}-inner`">
      <slot v-if="slots.default?.({})" />
      <template v-else>{{ label }}</template>
    </div>
  </li>
</template>

<script setup lang="ts">
import { useNamespace } from "@birdpaper-ui/hooks";
import { optionProps, OptionProps } from "../props";
import { computed, inject, ref, useSlots, watch, nextTick } from "vue";
import BpCheckbox from "@birdpaper-ui/components/checkbox/index";
import { SelectContext, selectInjectionKey, SelectOption, SelectValue } from "../types";

defineOptions({ name: "Option" });
const { clsBlockName } = useNamespace("option");

const props: OptionProps = defineProps(optionProps);
const slots = useSlots();

const ctx = inject<SelectContext | undefined>(selectInjectionKey, undefined);
const option = ref<SelectOption>(new SelectOption());

const currentModel = computed(() => ctx?.modelValue as SelectValue | SelectValue[] | undefined);

const getCheckboxState = () => {
  return Array.isArray(currentModel.value) && currentModel.value.includes(option.value.value);
};

const isChecked = ref(getCheckboxState());

const isActive = computed(() => {
  if (Array.isArray(currentModel.value)) {
    return currentModel.value.includes(props.value);
  }
  return currentModel.value === props.value;
});

const cls = computed(() => {
  let cls = [`${clsBlockName.value}`];
  if (isActive.value) cls.push(`${clsBlockName.value}-active`);
  if (props.disabled) cls.push(`${clsBlockName.value}-disabled`);

  return cls;
});

const init = () => {
  let label = props.label;
  if (!label) {
    try {
      const nodes = slots.default?.({});
      if (nodes?.length) {
        const text = nodes[0]?.children;
        label = typeof text === "string" ? text : String(text ?? "");
      }
    } catch {
      label = "";
    }
  }
  option.value.label = label || "";
  option.value.value = props.value;
};

const handleClick = () => {
  if (props.disabled) return;

  ctx?.onSelect(option.value.value, { ...option.value });
  nextTick(() => {
    isChecked.value = getCheckboxState();
  });
};

watch(
  () => [props.label, props.value, props.disabled, currentModel.value] as const,
  () => {
    init();
    isChecked.value = getCheckboxState();
  },
  { immediate: true }
);
</script>
