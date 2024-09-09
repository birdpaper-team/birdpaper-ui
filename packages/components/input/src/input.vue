<template>
  <div :class="cls" @click="handleClick">
    <div :class="`${clsBlockName}-perfix`" v-if="slots.perfix">
      <slot name="perfix"></slot>
    </div>
    <input
      ref="inpRef"
      :class="`${clsBlockName}-inner`"
      :name
      :disabled
      :placeholder
      :maxlength
      :type="inpType"
      :value="model"
      :spellcheck="false"
      @focus="onFocus"
      @blur="onBlur"
      @input="onInput"
    />
    <div :class="`${clsBlockName}-suffix select-none`" v-if="innerActionIcon || slots.suffix">
      <div :class="`${clsBlockName}-suffix-inner`" v-if="!slots.suffix">
        <component v-if="innerActionIcon && !!model" :is="innerActionIcon" class="action-icon" @click.stop="handleActionIconClick" />
        <span class="suffix-content">{{ suffixContent }}</span>
      </div>
      
      <span class="suffix-content" v-else> <slot name="suffix" /></span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useNamespace } from "@birdpaper-ui/hooks";
import { InputProps, inputProps } from "./props";
import { computed, useSlots, ref, nextTick } from "vue";
import type { Component } from "vue";
import { IconCloseLine, IconEyeFill, IconEyeCloseFill } from "birdpaper-icon";
import { InputType } from "./types";

defineOptions({ name: "Input" });
const { clsBlockName } = useNamespace("input");

const model = defineModel<string | number>({
  required: true,
  default: "",
});
const props: InputProps = defineProps(inputProps);
const slots = useSlots();

const cls = computed<string[]>(() => [clsBlockName, `${clsBlockName}-${props.size}`]);
const inpRef = ref<HTMLInputElement>();

const handleClick = () => {
  focus();
};

// Suffix.
const isEyeOpen = ref<boolean>(true);
const innerActionIcon = computed<Component>(() => {
  if (props.type === "password" && props.showPassword) {
    return !isEyeOpen.value ? IconEyeCloseFill : IconEyeFill;
  }

  if (props.clearable) {
    return IconCloseLine;
  }

  return null;
});
const suffixContent = computed<string | Component>(() => {
  if (props.maxlength && props.showLimit) {
    return `${String(model.value).length}/${props.maxlength}`;
  }
  return "";
});

const handleActionIconClick = () => {
  if (props.type === "text" && props.clearable) return handleClear();
  if (props.type === "password" && props.showPassword) return handleEyeOpen();
};

const inpType = computed<InputType>(() => (props.type === "text" ? "text" : isEyeOpen.value ? "password" : "text"));
const handleEyeOpen = () => {
  isEyeOpen.value = !isEyeOpen.value;
};
const handleClear = () => {
  model.value = "";
  nextTick(() => focus());
};

const focus = () => inpRef.value?.focus();
const blur = () => inpRef.value?.blur();
const onFocus = () => {};
const onBlur = () => {};

const onInput = (e: Event) => {
  model.value = (e.target as HTMLInputElement).value;
};

defineExpose({
  focus,
  blur,
});
</script>
