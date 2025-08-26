<template>
  <div :class="cls" @click="handleClick">
    <input type="checkbox" :class="`${clsBlockName}-inner`" />

    <span :class="[`${clsBlockName}-checkbox`, isCheck ? `${clsBlockName}-check` : '']">
      <template v-if="isCheck">
        <IconCheckLine size="16" v-if="!indeterminate" />
        <IconSubtractLine size="16" v-else />
      </template>
    </span>

    <span :class="`${clsBlockName}-label`" v-if="slots?.default?.()">
      <slot></slot>
    </span>
  </div>
</template>

<script setup lang="ts">
import { useNamespace } from "@birdpaper-ui/hooks";
import { computed, nextTick, ref, watch } from "vue";
import { CheckboxValue, CheckboxValueForArray } from "./types";
import { CheckboxProps, checkboxProps } from "./props";
import { IconCheckLine, IconSubtractLine } from "birdpaper-icon";

defineOptions({ name: "Checkbox" });
const { clsBlockName } = useNamespace("checkbox");

const model = defineModel<CheckboxValue | CheckboxValueForArray[]>({ default: false });
const props: CheckboxProps = defineProps(checkboxProps);
const slots = defineSlots();
const emits = defineEmits(["change"]);

const cls = computed(() => [clsBlockName, "select-none", props.disabled && `${clsBlockName}-disabled`]);

const isCheck = ref(false);
const upadteCheck = () => {
  if (Array.isArray(model.value)) {
    isCheck.value = model.value.includes(props.value as CheckboxValueForArray);
    return;
  }

  isCheck.value = model.value === props.value;
};

const handleClick = () => {
  if (props.disabled) return;

  if (Array.isArray(model.value)) {
    const index = model.value.indexOf(props.value as CheckboxValueForArray);
    if (index !== -1) {
      model.value.splice(index, 1);
      upadteCheck();
      return emits("change", model.value);
    }

    if (props.max !== 0 && props.max <= model.value.length) return;

    model.value.push(props.value as CheckboxValueForArray);
    upadteCheck();
    return emits("change", model.value);
  }

  model.value = isCheck.value ? false : true;
  nextTick(() => upadteCheck());
  nextTick(() => emits("change", model.value));
};

watch(
  () => model.value,
  () => {
    upadteCheck();
  },
  {
    immediate: true,
    deep: true,
  }
);
</script>
