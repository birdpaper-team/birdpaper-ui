<template>
  <div :class="cls" @click="handleClick">
    <input type="checkbox" :class="`${clsBlockName}-inner`" />

    <span :class="[`${clsBlockName}-checkbox`, isCheck ? `${clsBlockName}-check` : '']">
      <template v-if="isCheck">
        <IconCheckLine size="16" v-if="!indeterminate" />
        <IconSubtractLine size="16" v-else />
      </template>
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

const model = defineModel<CheckboxValue | CheckboxValue[]>({ default: "" });
const props: CheckboxProps = defineProps(checkboxProps);
const emits = defineEmits(["change"]);

const cls = computed(() => [clsBlockName, "select-none", props.disabled && `${clsBlockName}-disabled`]);

const isCheck = computed(() => {
  if (Array.isArray(model.value)) {
    return model.value.includes(props.value);
  }

  return model.value === props.value;
});

const handleClick = () => {
  if (props.disabled) return;

  if (Array.isArray(model.value)) {
    const index = model.value.indexOf(props.value);
    if (index !== -1) {
      model.value.splice(index, 1);
      return emits("change", model.value);
    }

    if (props.max !== 0 && props.max <= model.value.length) return;

    model.value.push(props.value);
    return emits("change", model.value);
  }

  model.value = isCheck.value ? "" : props.value;
  return emits("change", model.value);
};
</script>
