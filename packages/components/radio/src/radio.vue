<template>
  <label :class="cls" @click="handleInput">
    <input type="radio" :disabled :class="`${clsBlockName}-inner`" />

    <span :class="radioCls"></span>

    <span :class="labelCls">
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

const model = defineModel<RadioValue>({ default: false });
const props: RadioProps = defineProps(radioProps);

const cls = computed(() => [clsBlockName, "select-none", props.disabled && `${clsBlockName}-disabled`]);
const radioCls = computed(() => [`${clsBlockName}-radio`, isCheck.value && `${clsBlockName}-check`]);
const labelCls = computed(() => [`${clsBlockName}-label`, isCheck.value && `${clsBlockName}-check-label`]);

const handleInput = () => {
  if (props.disabled) return;

  if (model.value !== props.value) {
    model.value = props.value;
  }
};
const isCheck = computed(() => model.value === props.value);
</script>
