<template>
  <label :class="cls" @click="handleInput">
    <input type="radio" :disabled :class="`${clsBlockName}-inner`" />

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

  if (model.value !== props.value) {
    model.value = props.value;
    emits("change", model.value);
  }
};
const isCheck = computed(() => model.value === props.value);
</script>
