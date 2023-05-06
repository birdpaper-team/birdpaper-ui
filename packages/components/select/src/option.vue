<template>
  <li :class="`${name}-item`" @click="handleClick">
    <span>
      <slot></slot>
    </span>
  </li>
</template>

<script setup lang="ts" name="Option">
import { PropType, inject, reactive, ref, useSlots, watch } from "vue";
import { SelectBindValue, SelectOption, selectInjectionKey } from "./type";

const props = defineProps({
  value: { type: [String, Number, Boolean] as PropType<SelectBindValue>, default: "" },
  label: { type: String, default: "" },
});

const name = "bp-option";
const ctx = ref();
const slot = useSlots();
const option = reactive<SelectOption>(new SelectOption());

const setup = () => {
  ctx.value = inject(selectInjectionKey, null);

  option.label = props.label || (slot.default()[0].children as string);
  option.value = props.value;
};

const handleClick = () => {
  ctx.value?.onSelect({ ...props, ...option });
};

watch(
  () => props,
  () => {
    setup();
  },
  {
    immediate: true,
  }
);
</script>
