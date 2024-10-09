<template>
  <label :class="cls" @click="handleInput">
    <input type="radio" :disabled :class="`${clsBlockName}-inner`" />

    <span v-if="type === 'radio'" :class="[`${clsBlockName}-radio`, isCheck ? `${clsBlockName}-check` : '']"></span>

    <span :class="[`${clsBlockName}-label`, isCheck ? `${clsBlockName}-check-label` : '']">
      <slot></slot>
    </span>
  </label>
</template>

<script setup lang="ts">
import { useNamespace } from "@birdpaper-ui/hooks";
import { computed } from "vue";
import { RadioProps, radioProps } from "./props";

defineOptions({ name: "Radio" });
const { clsBlockName } = useNamespace("radio");

const model = defineModel<string | number | boolean>({
  default: false,
});
const props: RadioProps = defineProps(radioProps);

const cls = computed(() => {
  return [clsBlockName, "select-none", props.disabled && `${clsBlockName}-disabled`];
});

const handleInput = () => {
  if (props.disabled) return;

  if (model.value !== props.value) {
    model.value = props.value;
  }
};
const isCheck = computed(() => model.value === props.value);
</script>
