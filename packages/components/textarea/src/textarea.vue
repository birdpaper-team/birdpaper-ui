<template>
  <div :class="cls">
    <textarea
      ref="inpRef"
      :class="`${clsBlockName}-inner`"
      :rows
      :name
      :disabled
      :readonly
      :placeholder
      :maxlength
      :cursor="model?.length"
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
import { useNamespace } from "@birdpaper-ui/hooks";
import { computed, nextTick, ref, useSlots } from "vue";
import type { Component } from "vue";
import { TextareaProps, textareaProps } from "./props";
import { IconCloseLine } from "birdpaper-icon";

defineOptions({ name: "Textarea" });
const { clsBlockName } = useNamespace("textarea");

const model = defineModel<string>({ default: "" });
const props: TextareaProps = defineProps(textareaProps);
const emits = defineEmits(["input", "focus", "blur", "keypress", "keyup"]);
const slots = useSlots();

const cls = computed<string[] | {}[]>(() => [
  clsBlockName,
  `${clsBlockName}-${props.size}`,
  props?.disabled && `${clsBlockName}-disabled`,
]);

/** Inner action icon. */
const innerActionIcon = computed<Component>(() => {
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
  if (props.clearable) return clear(true);
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
  clear,
});
</script>
