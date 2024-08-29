<template>
  <button :class="[cls, 'select-none', { 'p-0': !hasDefaultSlot }]" :type="attrType" :disabled="isDisabled" @click="onClick">
    <div v-if="buttonIcon || loading" :class="['button-icon', `${hasDefaultSlot ? 'mr-1' : 'm-0'}`]">
      <component :class="{ 'bp-icon-loading': loading }" :is="buttonIcon" size="14"></component>
    </div>
    <slot />
  </button>
</template>

<script setup lang="ts">
import { useNamespace } from "@birdpaper-ui/hooks";
import { ButtonProps, buttonProps } from "./props";
import { IconLoader4Line } from "birdpaper-icon";
import { computed, useSlots } from "vue";

defineOptions({ name: "Button" });
const { clsBlockName } = useNamespace("button");

const props: ButtonProps = defineProps(buttonProps);
const emits = defineEmits<{
  (e: "click"): void;
}>();
const slots = useSlots();

/** Disabled  */
const isDisabled = computed<boolean>(() => props.disabled || props.loading);

/** Default Slots. */
const hasDefaultSlot = computed<boolean>(() => !!slots?.default?.()[0]);

const buttonIcon = computed<object>(() => {
  return props.loading ? IconLoader4Line : props.icon;
});

const cls = computed(() => {
  let className = [clsBlockName, `${clsBlockName}-${props.size}-${props.shape}`, `${clsBlockName}-${props.status}-${props.type}`, { "is-full": props.full }];
  return className;
});

const onClick = () => {
  if (isDisabled.value) return;

  emits("click");
};
</script>
