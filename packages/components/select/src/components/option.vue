<template>
  <li :class="cls" @click="handleClick">
    <span :class="`${clsBlockName}-inner`">
      <slot v-if="slots.default?.()" />
      <template v-else>{{ label }}</template>
    </span>
  </li>
</template>

<script setup lang="ts">
import { useNamespace } from "@birdpaper-ui/hooks";
import { optionProps, OptionProps } from "../props";
import { computed, inject, ref, useSlots, watch } from "vue";
import { SelectContext, selectInjectionKey, SelectOption } from "../types";

defineOptions({ name: "Option" });
const { clsBlockName } = useNamespace("option");

const props: OptionProps = defineProps(optionProps);
const slots = useSlots();

const ctx = ref<SelectContext>();
const option = ref<SelectOption>(new SelectOption());

const cls = computed(() => {
  let cls = [`${clsBlockName}`];
  if (ctx.value?.currentSelect.value === props.value) cls.push(`${clsBlockName}-active`);
  if (props.disabled) cls.push(`${clsBlockName}-disabled`);

  return cls;
});

const init = () => {
  ctx.value = inject(selectInjectionKey, undefined);

  option.value.label = props.label || (slots.default?.()[0].children as string);
  option.value.value = props.value;
};

const handleClick = () => {
  if (props.disabled) return;

  ctx.value?.onSelect(option.value.value, { ...option.value });
};

watch(
  () => props,
  () => init(),
  { immediate: true }
);
</script>
