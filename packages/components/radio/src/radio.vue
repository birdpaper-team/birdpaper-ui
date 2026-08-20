<template>
  <label
    :class="cls"
    role="radio"
    :aria-checked="isCheck"
    :aria-disabled="disabled || undefined"
    :tabindex="disabled ? -1 : 0"
    @click="handleInput"
    @keydown.space.prevent="handleInput"
  >
    <input type="radio" :checked="isCheck" :disabled :value="value" :class="`${clsBlockName}-inner`" tabindex="-1" />

    <span :class="radioCls"></span>

    <span :class="labelCls" v-if="slots?.default?.()">
      <slot></slot>
    </span>
  </label>
</template>

<script setup lang="ts">
import { useNamespace } from "@birdpaper-ui/hooks";
import { computed } from "vue";
import { RadioProps, radioProps } from "./props";
import { RadioValue } from "./types";

defineOptions({ name: "Radio" });
const { clsBlockName } = useNamespace("radio");

const model = defineModel<RadioValue>({ default: "" });
const props: RadioProps = defineProps(radioProps);
const slots = defineSlots();
const emits = defineEmits(["change"]);

const cls = computed(() => [
  clsBlockName.value,
  "select-none",
  isCheck.value && `${clsBlockName.value}-check`,
  props.disabled && `${clsBlockName.value}-disabled`,
]);
const radioCls = computed(() => [`${clsBlockName.value}-radio`]);
const labelCls = computed(() => [`${clsBlockName.value}-label`]);

const handleInput = () => {
  if (props.disabled) return;

  if (props.value !== undefined && model.value !== props.value) {
    model.value = props.value;
    emits("change", model.value);
  }
};
const isCheck = computed(() => model.value === props.value);
</script>
