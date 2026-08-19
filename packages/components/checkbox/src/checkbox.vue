<template>
  <div
    :class="cls"
    role="checkbox"
    :aria-checked="isVisualChecked"
    :aria-disabled="disabled || undefined"
    :tabindex="disabled ? -1 : 0"
    @click="handleClick"
    @keydown.space.prevent="handleClick"
  >
    <input
      type="checkbox"
      :class="`${clsBlockName}-inner`"
      :checked="isCheck"
      :disabled
      :indeterminate="indeterminate"
      tabindex="-1"
      @click.stop.prevent
    />

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

const updateCheck = () => {
  if (hasValue.value) {
    isCheck.value = model.value.includes(props.value as CheckboxValueForArray);
    return;
  }

  isCheck.value = modelBool.value;
};

/** @deprecated typo alias — use updateCheck */
const upadteCheck = updateCheck;

const handleClick = () => {
  if (props.disabled) return;

  if (hasValue.value) {
    const index = model.value.indexOf(props.value as CheckboxValueForArray);
    if (index !== -1) {
      const nextValue = [...model.value];
      nextValue.splice(index, 1);
      model.value = nextValue;
      updateCheck();
      return emits("change", nextValue);
    }

    if (props.max !== 0 && props.max <= model.value.length) return;

    const nextValue = [...model.value, props.value as CheckboxValueForArray];
    model.value = nextValue;
    updateCheck();
    return emits("change", nextValue);
  }

  modelBool.value = isCheck.value ? false : true;
  nextTick(() => updateCheck());
  nextTick(() => emits("change", modelBool.value));
};

watch(
  () => model.value,
  () => {
    updateCheck();
  },
  {
    immediate: true,
    deep: true,
  }
);
watch(
  () => modelBool.value,
  () => {
    updateCheck();
  },
  {
    immediate: true,
    deep: true,
  }
);
</script>
