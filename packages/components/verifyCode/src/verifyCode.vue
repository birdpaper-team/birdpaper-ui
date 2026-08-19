<template>
  <div :class="cls">
    <template v-for="v in length">
      <input
        v-model.trim="globalValue[v - 1]"
        :type="type"
        :ref="setItemRef"
        :class="`${clsBlockName}-inner`"
        :spellcheck="false"
        :disabled
        :readonly
        :maxlength="1"
        autocomplete="one-time-code"
        inputmode="numeric"
        @focus="focus"
        @keydown="onKeydown"
        @keydown.space.prevent=""
        @paste="onPaste"
        @input="onInput($event, v - 1)"
      />
    </template>
  </div>
</template>

<script setup lang="ts">
import { useNamespace } from "@birdpaper-ui/hooks";
import { ComponentPublicInstance, computed, nextTick, ref, watch } from "vue";
import { VerifyCodeProps, verifyCodeProps } from "./props";
import { getChildrenIndex } from "@birdpaper-ui/components/utils/dom";

defineOptions({ name: "VerifyCode" });
const { clsBlockName } = useNamespace("verify-code");

const model = defineModel<string>({ default: "" });
const props: VerifyCodeProps = defineProps(verifyCodeProps);
const emits = defineEmits(["finish"]);

let inpRefs: HTMLInputElement[] = [];
const setItemRef = (el: Element | ComponentPublicInstance | null) => {
  if (inpRefs.length >= props.length) {
    inpRefs = [];
  }
  if (el instanceof HTMLInputElement) {
    inpRefs.push(el);
  }
};

const cls = computed(() => {
  return [
    clsBlockName.value,
    "select-none",
    `${clsBlockName.value}-${props.size}`,
    props.disabled && `${clsBlockName.value}-disabled`,
  ];
});

const globalValue = ref<string[]>([]);

const updateValue = () => {
  if (props.disabled || props.readonly) return;

  model.value = globalValue.value.join("").substring(0, props.length);

  if (globalValue.value.filter(Boolean).length === props.length) {
    emits("finish");
  }
};

const onInput = (e: Event, index: number) => {
  if (props.disabled || props.readonly) return;

  const targetValue = (e.target as HTMLInputElement).value.replace(/\s+/g, "");
  !!targetValue && index + 1 < props.length && inpRefs[index + 1]?.focus();

  updateValue();
};

const onPaste = (e: ClipboardEvent) => {
  if (props.disabled || props.readonly) return;

  e.preventDefault();
  const clipboardData = e.clipboardData || (window as any)["clipboardData"];
  const pastedData = clipboardData.getData("Text");
  globalValue.value = [...pastedData].slice(0, props.length);
  updateValue();
  // Focus the last filled input or the next empty one
  const focusIndex = Math.min(globalValue.value.length, props.length - 1);
  inpRefs[focusIndex]?.focus();
};

const focus = () => {
  if (props.disabled || props.readonly) return;

  const len = globalValue.value.filter(Boolean).length;
  return inpRefs[len >= props.length ? len - 1 : len]?.focus();
};

const onKeydown = (e: KeyboardEvent) => {
  if (props.disabled || props.readonly) return;

  const index = getChildrenIndex(e.target);
  if (index < 0) return;

  const val = globalValue.value[index];

  switch (e.key) {
    case "Backspace":
      e.preventDefault();
      if (val) {
        // Clear current box first
        globalValue.value[index] = "";
      } else if (index > 0) {
        // Move focus back and clear previous box
        globalValue.value[index - 1] = "";
        nextTick(() => inpRefs[index - 1]?.focus());
      }
      updateValue();
      break;

    default:
      break;
  }
};

watch(
  () => model.value,
  () => {
    globalValue.value = model.value.split("") || [];
  },
  { immediate: true }
);

defineExpose({
  focus,
});
</script>
