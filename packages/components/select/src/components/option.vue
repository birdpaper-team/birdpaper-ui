<template>
  <li :class="cls" @click="handleClick">
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
import { computed, inject, ref, toRef, useSlots, watch, nextTick } from "vue";
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
  let cls = [`${clsBlockName.value}`];
  if (ctx.value?.modelValue === props.value) cls.push(`${clsBlockName.value}-active`);
  if (props.disabled) cls.push(`${clsBlockName.value}-disabled`);

  return cls;
});

const init = () => {
  ctx.value = inject(selectInjectionKey, undefined);

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

  ctx.value?.onSelect(option.value.value, { ...option.value });
  nextTick(() => {
    isChecked.value = getCheckboxState();
  });
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
