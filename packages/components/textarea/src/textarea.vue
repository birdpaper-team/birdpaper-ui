<template>
  <div :class="cls">
    <textarea
      ref="inpRef"
      :id
      :class="`${clsBlockName}-inner`"
      :rows
      :name
      :disabled
      :readonly
      :placeholder
      :value="model"
      :maxlength="nativeMaxlength"
      :spellcheck="false"
      @focus="onFocus"
      @blur="onBlur"
      @input="onInput"
      @keypress="onKeypress"
      @keyup="onKeyup"
    />

    <div :class="`${clsBlockName}-suffix select-none`" v-if="innerActionIcon || innerSuffixContent || slots.suffix">
      <div :class="`${clsBlockName}-suffix-inner`" v-if="!slots.suffix">
        <component
          v-if="showClear"
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
import { computed, nextTick, ref, useSlots, shallowRef, triggerRef, watch } from "vue";
import type { Component } from "vue";
import { TextareaProps, textareaProps } from "./props";
import { IconCloseLine } from "birdpaper-icon";

defineOptions({ name: "Textarea" });
const { clsBlockName } = useNamespace("textarea");

const modelValue = defineModel<string>({ default: "" });
const model = shallowRef(modelValue.value);

watch(modelValue, (newValue) => {
  model.value = newValue;
  triggerRef(model);
});

const props: TextareaProps = defineProps(textareaProps);
const emits = defineEmits(["input", "focus", "blur", "keypress", "keyup"]);
const slots = useSlots();

const cls = computed<string[] | {}[]>(() => [
  clsBlockName.value,
  `${clsBlockName.value}-${props.size}`,
  props?.disabled && `${clsBlockName.value}-disabled`,
]);

/** Prefer native maxlength when counting by character length. */
const nativeMaxlength = computed(() =>
  props.maxlength && props.wordCountMode === "default" ? props.maxlength : undefined
);

const showClear = computed(() => props.clearable && !!model.value);

/** Inner action icon. */
const innerActionIcon = computed<Component | null>(() => {
  if (props.clearable) {
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
  if (props.disabled || props.readonly) return;
  if (props.clearable) return clear(true);
};

/**
 * Clear input content.
 * @param autoFocus false
 */
const clear = (autoFocus: boolean = false) => {
  if (props.readonly || props.disabled) return;
  model.value = "";
  modelValue.value = "";
  triggerRef(model);
  autoFocus && nextTick(() => focus());
};

const inpRef = ref<HTMLInputElement>();
const focus = () => {
  if (props.disabled) return;
  inpRef.value?.focus();
};
const blur = () => inpRef.value?.blur();
const onFocus = (e: Event) => emits("focus", e);
const onBlur = (e: Event) => emits("blur", e);
const onKeypress = (e: Event) => emits("keypress", e);
const onKeyup = (e: Event) => emits("keyup", e);

const onInput = (e: Event) => {
  const value = (e.target as HTMLInputElement).value;

  if (props.maxlength) {
    const truncated = truncateToMax(value);
    if (truncated !== value) {
      (e.target as HTMLInputElement).value = truncated;
      model.value = truncated;
      modelValue.value = truncated;
      triggerRef(model);
      emits("input", { e, value: truncated });
      return;
    }
  }

  model.value = value;
  modelValue.value = value;
  triggerRef(model);
  emits("input", { e, value });
};

defineExpose({
  focus,
  blur,
  clear,
});
</script>
