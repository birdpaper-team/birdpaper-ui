<template>
  <div :class="cls" @click.stop="focus">
    <div :class="`${clsBlockName}-prefix select-none`" v-if="slots.prefix">
      <span class="prefix-content">
        <slot name="prefix" />
      </span>
    </div>
    <input
      ref="inpRef"
      v-if="!slots.default?.({})"
      :class="`${clsBlockName}-inner`"
      :id
      :name
      :disabled
      :readonly
      :placeholder
      :type="inpType"
      :value="model"
      :spellcheck="false"
      @focus="onFocus"
      @blur="onBlur"
      @input="onInput"
      @keypress="onKeypress"
      @keyup="onKeyup"
      @keyup.enter="onEnter"
    />
    <slot v-else />
    <div :class="`${clsBlockName}-suffix select-none`" v-if="innerActionIcon || innerSuffixContent || slots.suffix">
      <div :class="`${clsBlockName}-suffix-inner`" v-if="!slots.suffix">
        <component
          v-if="innerActionIcon && !!model"
          :is="innerActionIcon"
          class="action-icon"
          @click.stop="handleActionIconClick"
        />
        <span class="suffix-content">{{ innerSuffixContent }}</span>
      </div>

      <span class="suffix-content" v-else> <slot name="suffix" /></span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useNamespace, useWordCount } from "@birdpaper-ui/hooks";
import { InputProps, inputProps } from "./props";
import { computed, useSlots, ref, nextTick, onMounted } from "vue";
import type { Component } from "vue";
import { IconCloseLine, IconEyeFill, IconEyeCloseFill } from "birdpaper-icon";
import { InputType, WordCountMode } from "./types";

defineOptions({ name: "Input" });
const { clsBlockName } = useNamespace("input");

const model = defineModel<string>({ default: "" });

const props: InputProps = defineProps(inputProps);
const emits = defineEmits(["input", "focus", "blur", "keypress", "keyup", "enter"]);
const slots = useSlots();

const cls = computed<string[] | {}[]>(() => [
  clsBlockName.value,
  `${clsBlockName.value}-${props.size}`,
  props.disabled && `${clsBlockName.value}-disabled`,
  props.isRound && `${clsBlockName.value}-round`,
]);
const inpType = computed<InputType>(() => {
  if (props.type === "password") {
    return isEyeOpen.value ? "text" : "password";
  }
  return props.type;
});

/** The password text is hide or not. */
const isEyeOpen = ref<boolean>(false);

/** Inner action icon. */
const innerActionIcon = computed<Component | null>(() => {
  if (props.type === "password" && props.showPassword) {
    return !isEyeOpen.value ? IconEyeCloseFill : IconEyeFill;
  }

  if (props.clearable && !props.readonly) {
    return IconCloseLine;
  }

  return null;
});

// Word count logic via shared hook
const { formatWordCountDisplay, truncateToMax } = useWordCount({
  value: model,
  mode: computed(() => props.wordCountMode),
  maxlength: computed(() => props.maxlength),
  customWordCount: computed(() => props.customWordCount),
});

/** Inner suffix content. */
const innerSuffixContent = computed<string | Component>(() => {
  if (props.showLimit) {
    return formatWordCountDisplay();
  }
  return "";
});

/** Handle action icon click */
const handleActionIconClick = () => {
  if (props.disabled) return;

  if (props.type === "text" && props.clearable && !props.readonly) return clear(true);
  if (props.type === "password" && props.showPassword) return triggerEye();
};

/**
 * Trigger password text in password type and the `show-password` must be true.
 */
const triggerEye = () => {
  if (!props.showPassword) return;
  isEyeOpen.value = !isEyeOpen.value;
  return isEyeOpen.value;
};

/**
 * Clear input content.
 * @param autoFocus false
 */
const clear = (autoFocus: boolean = false) => {
  model.value = "";
  // oxlint-disable-next-line no-unused-expressions
  autoFocus && nextTick(() => focus());
};

const inpRef = ref<HTMLInputElement>();
const focus = () => inpRef.value?.focus();
const blur = () => inpRef.value?.blur();
const onFocus = (e: Event) => emits("focus", e);
const onBlur = (e: Event) => emits("blur", e);
const onKeypress = (e: Event) => emits("keypress", e);
const onKeyup = (e: Event) => emits("keyup", e);

const onEnter = (e: Event) => {
  if (props.disabled || props.readonly) return;
  emits("enter", { e, value: model.value });
};

const onInput = (e: Event) => {
  const value = (e.target as HTMLInputElement).value;

  if (props.maxlength) {
    const truncated = truncateToMax(value);
    if (truncated !== value) {
      (e.target as HTMLInputElement).value = truncated;
      model.value = truncated;
      emits("input", { e, value: truncated });
      return;
    }
  }

  model.value = value;
  emits("input", { e, value });
};

// Auto focus when component mounted
onMounted(() => {
  if (props.autoFocus) {
    nextTick(() => {
      focus();
    });
  }
});

defineExpose({
  focus,
  blur,
  triggerEye,
  clear,
});
</script>
