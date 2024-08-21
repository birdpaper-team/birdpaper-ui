<template>
  <button
    :class="[cls, 'select-none']"
    :type="attrType"
    :disabled="isDisabled"
    @click="onClick"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { useNamespace } from "@birdpaper-ui/hooks";
import { ButtonProps, buttonProps } from "./props";
import { computed } from "vue";

defineOptions({ name: "Button" });
const { clsBlockName } = useNamespace("button");

const props: ButtonProps = defineProps(buttonProps);

/** Disabled  */
const isDisabled = computed<boolean>(() => props.disabled || props.loading);

const cls = computed(() => {
  let className = [
    clsBlockName,
    `${clsBlockName}-${props.shape}-${props.size}`,
    `${clsBlockName}-type-${props.type}`,
    `${clsBlockName}-status-${props.status}`,
    { "is-full": props.full },
  ];
  return className;
});

const onClick = () => {};
</script>
