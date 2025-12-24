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
import { useNamespace } from "@birdpaper-ui/hooks";
import { InputProps, inputProps } from "./props";
import { computed, useSlots, ref, nextTick, onMounted, shallowRef, triggerRef, watch } from "vue";
import type { Component } from "vue";
import { IconCloseLine, IconEyeFill, IconEyeCloseFill } from "birdpaper-icon";
import { InputType, WordCountMode } from "./types";

defineOptions({ name: "Input" });
const { clsBlockName } = useNamespace("input");

const modelValue = defineModel<string | number>({ default: "" });
const model = shallowRef(modelValue.value);

// 监听外部modelValue变化，同步到内部model
watch(modelValue, (newValue) => {
  model.value = newValue;
  triggerRef(model);
});

const props: InputProps = defineProps(inputProps);
const emits = defineEmits(["input", "focus", "blur", "keypress", "keyup", "enter"]);
const slots = useSlots();

const cls = computed<string[] | {}[]>(() => [
  clsBlockName,
  `${clsBlockName}-${props.size}`,
  props.disabled && `${clsBlockName}-disabled`,
  props.isRound && `${clsBlockName}-round`,
]);
const inpType = computed<InputType>(() => {
  if (props.type === "password") {
    return isEyeOpen.value ? "password" : "text";
  }
  return props.type;
});

/** The password text is hide or not. */
const isEyeOpen = ref<boolean>(true);

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

/**
 * 计算中英文字符数量
 * @param value 输入值
 * @returns { chinese: number, english: number } 中英文字符数量
 */
const countChineseEnglish = (value: string) => {
  const chineseRegex = /[\u4e00-\u9fa5]/g;
  const englishRegex = /[a-zA-Z]/g;
  
  const chineseMatches = value.match(chineseRegex) || [];
  const englishMatches = value.match(englishRegex) || [];
  
  return {
    chinese: chineseMatches.length,
    english: englishMatches.length
  };
};

/**
 * 根据模式计算字数
 * @param value 输入值
 * @returns 字数
 */
const calculateWordCount = (value: string): number => {
  const stringValue = String(value || "");
  
  switch (props.wordCountMode) {
    case "chinese-english": {
      const { chinese, english } = countChineseEnglish(stringValue);
      return chinese + english;
    }
    case "custom": {
      if (props.customWordCount && typeof props.customWordCount === 'function') {
        return props.customWordCount(stringValue);
      }
      // 如果自定义函数无效，回退到默认模式
      return stringValue.length;
    }
    case "default":
    default:
      return stringValue.length;
  }
};

/**
 * 格式化字数统计显示内容
 * @returns 格式化后的字数统计字符串
 */
const formatWordCountDisplay = (): string => {
  const stringValue = String(model.value || "");
  
  if (props.wordCountMode === "chinese-english") {
    const { chinese, english } = countChineseEnglish(stringValue);
    const total = chinese + english;
    if (props.maxlength) {
      return `中${chinese}英${english}/${props.maxlength}`;
    }
    return `中${chinese}英${english}`;
  }
  
  const count = calculateWordCount(stringValue);
  if (props.maxlength) {
    return `${count}/${props.maxlength}`;
  }
  return `${count}`;
};

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
  modelValue.value = "";
  triggerRef(model);
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
  model.value = value;
  modelValue.value = value;
  triggerRef(model);
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