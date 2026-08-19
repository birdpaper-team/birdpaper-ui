<template>
  <li :class="cls" @click="handleClick">
    <span :class="`${clsBlockName}-inner`">
      <slot />
    </span>
  </li>
</template>

<script lang="ts" setup>
import { useNamespace } from "@birdpaper-ui/hooks";
import { DropdownContext, dropdownInjectionKey } from "../types";
import { computed, inject, ref } from "vue";
import { DoptionProps, doptionProps } from "../props";

defineOptions({ name: "Doption" });
const { clsBlockName } = useNamespace("doption");

const ctx = ref<DropdownContext>();
const props: DoptionProps = defineProps(doptionProps);

const cls = computed(() => [
  clsBlockName.value,
  props.disabled && `${clsBlockName.value}-disabled`,
]);

const init = () => {
  ctx.value = inject(dropdownInjectionKey, undefined);
};
init();

const handleClick = () => {
  if (props.disabled) return;
  ctx.value?.onSelect(props.value);
};
</script>
