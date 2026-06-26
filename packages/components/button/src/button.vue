<template>
  <button :class="cls" :type="attrType" :disabled="isDisabled" @click="onClick" @keydown="onKeydown">
    <div v-if="showIcon && isIconLeft" :class="iconCls">
      <component :is="btnIcon" :class="iconInnerCls" size="14"></component>
    </div>
    <span v-if="hasDefaultSlot" :class="innerCls">
      <slot />
    </span>
    <div v-if="showIcon && !isIconLeft" :class="iconCls">
      <component :is="btnIcon" :class="iconInnerCls" size="14"></component>
    </div>
  </button>
</template>

<script setup lang="ts">
import { useNamespace } from "@birdpaper-ui/hooks";
import { ButtonProps, buttonProps } from "./props";
import { IconLoaderLine, IconLoader2Line, IconLoader3Line, IconLoader4Line, IconLoader5Line } from "birdpaper-icon";
import { computed, useSlots } from "vue";
import type { Component } from "vue";
import { ButtonShape, ButtonIconPosition } from "./types";

defineOptions({ name: "Button" });
const { clsBlockName } = useNamespace("button");

const props: ButtonProps = defineProps(buttonProps);
const emits = defineEmits<{ (e: "click"): void }>();
const slots = useSlots();

/** Disabled.  */
const isDisabled = computed<boolean>(() => props.disabled || !!props.loading);

/** Default Slots. */
const hasDefaultSlot = computed<boolean>(() => {
  if (props.shape === ButtonShape.CIRCLE && props.loading) return false;
  return !!slots?.default?.({})[0];
});

// Icons.
/** Default loading icon map. */
const loadingIcons = [IconLoaderLine, IconLoader2Line, IconLoader3Line, IconLoader4Line, IconLoader5Line];

/** Icon for button. */
const btnIcon = computed<Component | null>(() => {
  if (!props.loading) return props.icon;

  if (typeof props.loadingIcon === "number") return loadingIcons[props.loadingIcon - 1];
  return props.loadingIcon;
});

const showIcon = computed<boolean>(() => !!btnIcon.value || props.loading);
const isIconLeft = computed<boolean>(() => props.iconPosition === ButtonIconPosition.LEFT);

const cls = computed(() => [
  clsBlockName.value,
  `${clsBlockName.value}-${props.size}-${props.shape}`,
  `${clsBlockName.value}-${props.status}-${props.type}`,
  { "is-full": props.full, "p-0": !hasDefaultSlot.value, "no-padding": !hasDefaultSlot.value },
  "select-none",
]);
const innerCls = computed(() => [
  `${clsBlockName.value}-inner`,
  {
    "pl-4": props.loading && hasDefaultSlot.value && isIconLeft.value,
    "pr-4": props.loading && hasDefaultSlot.value && !isIconLeft.value,
  },
]);
const iconCls = computed(() => {
  const classes = [
    "button-icon",
    {
      "mr-0": props.loading && hasDefaultSlot.value && isIconLeft.value,
      "ml-0": props.loading && hasDefaultSlot.value && !isIconLeft.value,
    },
  ];

  if (hasDefaultSlot.value) {
    if (props.iconGap) {
      classes.push(isIconLeft.value ? `mr-${props.iconGap}` : `ml-${props.iconGap}`);
    } else {
      classes.push(isIconLeft.value ? "mr-1" : "ml-1");
    }
  } else {
    classes.push("m-0");
  }

  return classes;
});
const iconInnerCls = computed(() => [
  { "bp-icon-loading": props.loading, absolute: hasDefaultSlot.value && props.loading },
]);

const onClick = (): void => {
  if (isDisabled.value) return;
  emits("click");
};

const onKeydown = (e: KeyboardEvent): void => {
  if (isDisabled.value) return;

  if (e.key === " ") {
    e.preventDefault();
    onClick();
  }
};
</script>
