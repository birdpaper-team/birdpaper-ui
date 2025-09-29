<template>
  <li :class="cls" @click="handleClick">
    <bp-checkbox v-if="ctx?.multiple" v-model:check="isChecked" />
    <span :class="`${clsBlockName}-inner`">
      <slot v-if="slots.default?.({})" />
      <template v-else>{{ label }}</template>
    </span>
  </li>
</template>

<script setup lang="ts">
import { useNamespace } from "@birdpaper-ui/hooks";
import { optionProps, OptionProps } from "../props";
import { computed, inject, ref, toRef, useSlots, watch } from "vue";
import BpCheckbox from "@birdpaper-ui/components/checkbox/index";
import { SelectContext, selectInjectionKey, SelectOption } from "../types";

defineOptions({ name: "Option" });
const { clsBlockName } = useNamespace("option");

const props: OptionProps = defineProps(optionProps);
const slots = useSlots();

const ctx = ref<SelectContext>();
const option = ref<SelectOption>(new SelectOption());

const getCheckboxState = () => {
  return Array.isArray(ctx.value?.modelValue) && ctx.value.modelValue.includes(option.value.value);
};

const isChecked = ref(getCheckboxState());

const cls = computed(() => {
  let cls = [`${clsBlockName}`];
  if (ctx.value?.modelValue === props.value) cls.push(`${clsBlockName}-active`);
  if (props.disabled) cls.push(`${clsBlockName}-disabled`);

  return cls;
});

const init = () => {
  ctx.value = inject(selectInjectionKey, undefined);

  option.value.label = props.label || (slots.default?.({})[0].children as string);
  option.value.value = props.value;
};

const handleClick = () => {
  if (props.disabled) return;

  ctx.value?.onSelect(option.value.value, { ...option.value });
  isChecked.value = getCheckboxState();
};

watch(
  () => props,
  () => {
    init();
    isChecked.value = getCheckboxState();
  },
  { immediate: true }
);
</script>
