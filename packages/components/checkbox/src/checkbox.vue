<template>
  <div :class="cls" @click="handleClick">
    <input type="checkbox" :class="`${clsBlockName}-inner`" />

    <span :class="[`${clsBlockName}-checkbox`, isCheck ? `${clsBlockName}-check` : '']">
      <IconCheckLine size="16" v-if="isCheck && !indeterminate" />
      <IconSubtractLine size="16" v-if="isCheck && indeterminate" />
    </span>
    <span :class="`${clsBlockName}-label`">
      <slot></slot>
    </span>
  </div>
</template>

<script setup lang="ts">
import { useNamespace } from "@birdpaper-ui/hooks";
import { computed } from "vue";
import { CheckboxValue } from "./types";
import { CheckboxProps, checkboxProps } from "./props";
import { IconCheckLine, IconSubtractLine } from "birdpaper-icon";

defineOptions({ name: "Checkbox" });
const { clsBlockName } = useNamespace("checkbox");

const model = defineModel<CheckboxValue>({ default: false });
const props: CheckboxProps = defineProps(checkboxProps);

const cls = computed(() => [clsBlockName, "select-none", props.disabled && `${clsBlockName}-disabled`]);

const isCheck = computed(() => {
  if (Array.isArray(model.value)) {
    if (!props.value) return false;

    return model.value.includes(props.value);
  }
  return model.value;
});

const handleClick = () => {
  if (props.disabled) return;

  if (Array.isArray(model.value)) {
    if (!props.value) return false;

    let arr = JSON.parse(JSON.stringify(model.value));

    const index = arr.indexOf(props.value);
    index === -1 ? arr.push(props.value) : arr.splice(index, 1);
  }
  model.value = !model.value;

};
</script>
