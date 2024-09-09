<template>
  <div :class="cls" @click="focus">
    <div :class="`${clsBlockName}-perfix select-none`" v-if="slots.perfix">
      <slot name="perfix"></slot>
    </div>
    <input
      ref="inpRef"
      :class="`${clsBlockName}-inner`"
      :name
      :disabled
      :readonly
      :placeholder
      :maxlength
      :type="inpType"
      :value="model"
      :spellcheck="false"
      @focus="onFocus"
      @blur="onBlur"
      @input="onInput"
      @keypress="onKeypress"
      @keyup="onKeyup"
    />
    <div :class="`${clsBlockName}-suffix select-none`" v-if="innerActionIcon || slots.suffix">
      <div :class="`${clsBlockName}-suffix-inner`" v-if="!slots.suffix">
        <component v-if="innerActionIcon && !!model" :is="innerActionIcon" class="action-icon" @click.stop="handleActionIconClick" />
        <span class="suffix-content">{{ innerSuffixContent }}</span>
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
  default: "",
});
const props: InputProps = defineProps(inputProps);
const emits = defineEmits(["input", "focus", "blur", "keypress", "keyup"]);
const slots = useSlots();

const cls = computed<string[] | {}[]>(() => [clsBlockName, `${clsBlockName}-${props.size}`, props.disabled && `${clsBlockName}-disabled`]);
const inpType = computed<InputType>(() => (props.type === "text" ? "text" : isEyeOpen.value ? "password" : "text"));

/** The password text is hide or not. */
const isEyeOpen = ref<boolean>(true);

/** Inner action icon. */
const innerActionIcon = computed<Component>(() => {
  if (props.type === "password" && props.showPassword) {
    return !isEyeOpen.value ? IconEyeCloseFill : IconEyeFill;
  }

  if (props.clearable) {
    return IconCloseLine;
  }

  return null;
});
/** Inner suffix content. */
const innerSuffixContent = computed<string | Component>(() => {
  if (props.maxlength && props.showLimit) {
    return `${String(model.value).length}/${props.maxlength}`;
  }
  return "";
});

/** Handle action icon click */
const handleActionIconClick = () => {
  if (props.disabled || props.readonly) return;

  if (props.type === "text" && props.clearable) return clear(true);
  if (props.type === "password" && props.showPassword) return triggerEye();
};

/**
 * Trigger password text in password type and the `show-password` must be true.
 */
const triggerEye = () => {
  if (!props.showPassword) return;
  isEyeOpen.value = !isEyeOpen.value;
};

/**
 * Clear input content.
 * @param autoFocus false
 */
const clear = (autoFocus: boolean = false) => {
  model.value = "";
  autoFocus && nextTick(() => focus());
};

const inpRef = ref<HTMLInputElement>();
const focus = () => inpRef.value?.focus();
const blur = () => inpRef.value?.blur();
const onFocus = () => emits("focus");
const onBlur = () => emits("blur");
const onKeypress = () => emits("keypress");
const onKeyup = () => emits("keyup");

const onInput = (e: Event) => {
  model.value = (e.target as HTMLInputElement).value;
  emits("input");
};

defineExpose({
  focus,
  blur,
  triggerEye,
  clear,
  model,
  isEyeOpen,
});
</script>
