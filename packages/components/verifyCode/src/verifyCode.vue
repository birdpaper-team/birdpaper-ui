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
        @focus="onFocus"
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
import { computed, ref, VNodeRef, watch } from "vue";
import { VerifyCodeProps, verifyCodeProps } from "./props";
import { getChildrenIndex } from "@birdpaper-ui/components/utils/dom";

defineOptions({ name: "VerifyCode" });
const { clsBlockName } = useNamespace("verifyCode");

const model = defineModel<string>({ default: "" });
const props: VerifyCodeProps = defineProps(verifyCodeProps);
const emits = defineEmits(["finish"]);

let inpRefs: HTMLInputElement[] = [];
const setItemRef = (el: HTMLInputElement | null): VNodeRef => {
  if (el) inpRefs.push(el);
  return ref(el);
};

const cls = computed(() => {
  return [clsBlockName, "select-none", `${clsBlockName}-${props.size}`, props.disabled && `${clsBlockName}-disabled`];
});

const globalValue = ref<string[]>([]);

const updateValue = () => {
  if (props.disabled || props.readonly) return;

  model.value = globalValue.value.join("").substring(0, props.length);

  if (globalValue.value.length === props.length) {
    emits("finish");
  }
};

const onInput = (e: Event, index: number) => {
  if (props.disabled || props.readonly) return;

  const targetValue = (e.target as HTMLInputElement).value.replace(/\s+/g, "");
  !!targetValue && index + 1 < props.length && inpRefs[index + 1].focus();

  updateValue();
};

const onPaste = (e: ClipboardEvent) => {
  if (props.disabled || props.readonly) return;

  var clipboardData = e.clipboardData || window["clipboardData"];
  var pastedData = clipboardData.getData("Text");
  globalValue.value = [...pastedData].slice(0, props.length);
};

const onFocus = () => {
  if (props.disabled || props.readonly) return;

  const len = globalValue.value.length;
  return inpRefs[len >= props.length ? len - 1 : len]?.focus();
};

const onKeydown = (e: KeyboardEvent) => {
  if (props.disabled || props.readonly) return;

  const index = getChildrenIndex(e.target);
  const val = globalValue.value[index];
  const isLastEl = index === props.length - 1;

  switch (e.key) {
    case "Backspace":
      globalValue.value.splice(isLastEl && val ? index : index - 1, 1);

      onFocus();
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
</script>
