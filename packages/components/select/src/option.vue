<template>
  <li :class="`${name}-item`" @click="handleClick">
    <span>
      <slot></slot>
    </span>
  </li>
</template>

<script setup lang="ts" name="Option">
import { inject, ref, useSlots } from "vue";
import { selectInjectionKey } from "./type";

const props = defineProps({
  value: { type: [String, Number], default: "" },
  label: { type: [String, Number], default: "" },
});
const name = "bp-option";
const ctx = ref();
const slot = useSlots();

const setup = () => {
  ctx.value = inject(selectInjectionKey, null);
};

setup();

const handleClick = () => {
  ctx.value?.onSelect({
    ...props,
    label: props.label || slot.default()[0].children,
  });
};
</script>
