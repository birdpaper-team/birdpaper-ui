<template>
  <button :class="[cls, 'select-none']" :type="attrType" :disabled="isDisabled" @click="onClick">
    <div v-if="buttonIcon || loading" class="button-icon">
      <component :class="{ 'bp-icon-loading': loading }" :is="buttonIcon" size="14"></component>
    </div>
    <slot />
  </button>
</template>

<script setup lang="ts">
import { useNamespace } from "@birdpaper-ui/hooks";
import { ButtonProps, buttonProps } from "./props";
import { IconLoader4Line } from "birdpaper-icon";
import { computed } from "vue";

defineOptions({ name: "Button" });
const { clsBlockName } = useNamespace("button");

const props: ButtonProps = defineProps(buttonProps);
const emits = defineEmits<{
  (e: "click"): void;
}>();

/** Disabled  */
const isDisabled = computed<boolean>(() => props.disabled || props.loading);

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
