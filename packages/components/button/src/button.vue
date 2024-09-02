<template>
  <button :class="cls" :type="attrType" :disabled="isDisabled" @click="onClick">
    <div v-if="btnIcon || loading" :class="iconCls">
      <component :is="btnIcon" :class="iconInnerCls" size="14"></component>
    </div>
    <span v-if="hasDefaultSlot" :class="innerCls">
      <slot />
    </span>
  </button>
</template>

<script setup lang="ts">
import { useNamespace } from "@birdpaper-ui/hooks";
import { ButtonProps, buttonProps } from "./props";
import { IconLoaderLine, IconLoader2Line, IconLoader3Line, IconLoader4Line, IconLoader5Line } from "birdpaper-icon";
import { computed, useSlots } from "vue";
import type { Component } from "vue";

defineOptions({ name: "Button" });
const { clsBlockName } = useNamespace("button");

const props: ButtonProps = defineProps(buttonProps);
const emits = defineEmits(["click"]);
const slots = useSlots();

/** Disabled.  */
const isDisabled = computed<boolean>(() => props.disabled || !!props.loading);

/** Default Slots. */
const hasDefaultSlot = computed<boolean>(() => !!slots?.default?.()[0]);

// Icons.
/** Default loading icon map. */
const loadingIcons = [IconLoaderLine, IconLoader2Line, IconLoader3Line, IconLoader4Line, IconLoader5Line];

/** Icon for button. */
const btnIcon = computed<Component>(() => {
  if (!props.loading) return props.icon;

  if (typeof props.loadingIcon === "number") return loadingIcons[props.loadingIcon - 1];
  return props.loadingIcon;
});

const cls = computed(() => [
  clsBlockName,
  `${clsBlockName}-${props.size}-${props.shape}`,
  `${clsBlockName}-${props.status}-${props.type}`,
  { "is-full": props.full, "p-0": !hasDefaultSlot.value },
  "select-none",
]);
const innerCls = computed(() => [`${clsBlockName}-inner`, { "pl-4": props.loading }]);
const iconCls = computed(() => ["button-icon", hasDefaultSlot.value ? "mr-1" : "m-0"]);
const iconInnerCls = computed(() => [{ "bp-icon-loading": props.loading, absolute: hasDefaultSlot.value && props.loading }]);

const onClick = () => {
  if (isDisabled.value) return;
  emits("click");
};
</script>
