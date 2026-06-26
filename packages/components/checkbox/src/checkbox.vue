<template>
  <div :class="cls" @click="handleClick">
    <input type="checkbox" :class="`${clsBlockName}-inner`" />

    <span :class="[`${clsBlockName}-checkbox`, isVisualChecked ? `${clsBlockName}-check` : '']">
      <template v-if="isVisualChecked">
        <IconCheckLine size="16" v-if="isCheck && !indeterminate" />
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

const model = defineModel<CheckboxValueForArray[]>({ default: [] });
const modelBool = defineModel<CheckboxValue>("check", { default: false });
const props: CheckboxProps = defineProps(checkboxProps);
const slots = defineSlots();
const emits = defineEmits(["change"]);

const cls = computed(() => [clsBlockName.value, "select-none", props.disabled && `${clsBlockName.value}-disabled`]);

const isCheck = ref(false);
const isVisualChecked = computed(() => isCheck.value || props.indeterminate);
const hasValue = computed(() => props.value !== undefined && props.value !== null);
const upadteCheck = () => {
  if (hasValue.value) {
    isCheck.value = model.value.includes(props.value as CheckboxValueForArray);
    return;
  }

  isCheck.value = modelBool.value;
};

const handleClick = () => {
  if (props.disabled) return;

  if (hasValue.value) {
    const index = model.value.indexOf(props.value as CheckboxValueForArray);
    if (index !== -1) {
      const nextValue = [...model.value];
      nextValue.splice(index, 1);
      model.value = nextValue;
      upadteCheck();
      return emits("change", nextValue);
    }

    if (props.max !== 0 && props.max <= model.value.length) return;

    const nextValue = [...model.value, props.value as CheckboxValueForArray];
    model.value = nextValue;
    upadteCheck();
    return emits("change", nextValue);
  }

  modelBool.value = isCheck.value ? false : true;
  nextTick(() => upadteCheck());
  nextTick(() => emits("change", modelBool.value));
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
watch(
  () => modelBool.value,
  () => {
    upadteCheck();
  },
  {
    immediate: true,
    deep: true,
  }
);
</script>
