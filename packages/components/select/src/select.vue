<template>
  <bp-trigger
    v-model="isOpen"
    transition="fade-dropdown"
    :class="clsBlockName"
    :disabled
    :popup-offset="10"
    auto-fit-width
    update-at-scroll
  >
    <bp-input-tag
      v-if="multiple"
      v-model="(labelModel as string[])"
      :size="size"
      :placeholder="labelModel.length === 0 ? placeholder : ''"
      :max-tag-count="maxTagCount"
      :disabled="disabled"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
    ></bp-input-tag>

    <bp-input
      v-else
      v-model="(labelModel as any)"
      readonly
      :size="size"
      :disabled="disabled"
      :placeholder="placeholder"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
    >
      <template #suffix>
        <IconCloseLine v-if="!props.disabled && showClear && labelModel" @click.stop="handleClear" />
        <component v-else :is="isOpen ? IconArrowUpSLine : IconArrowDownSLine"></component>
      </template>
    </bp-input>

    <template #content>
      <ul :class="optionListCls">
        <slot v-if="hasOptions"></slot>
        <bp-empty v-else />
      </ul>
    </template>
  </bp-trigger>
</template>

<script setup lang="ts">
import BpInput from "@birdpaper-ui/components/input/index";
import BpInputTag from "@birdpaper-ui/components/inputTag/index";
import BpTrigger from "@birdpaper-ui/components/trigger/index";
import BpEmpty from "@birdpaper-ui/components/empty/index";
import { useNamespace } from "@birdpaper-ui/hooks";
import { SelectProps, selectProps } from "./props";
import { selectInjectionKey, SelectOption, SelectValue } from "./types";
import { IconArrowDownSLine, IconArrowUpSLine } from "birdpaper-icon";
import { computed, provide, ref, useSlots, watchEffect } from "vue";
import { getAllElements } from "@birdpaper-ui/components/utils/dom";
import { IconCloseLine } from "birdpaper-icon";
import { get } from "radash";

defineOptions({ name: "Select" });
const { clsBlockName } = useNamespace("select");

const model = defineModel<SelectValue | SelectValue[]>({ default: "" });
const labelModel = ref<string | string[]>("");
const optionListCls = computed(() => [
  `${clsBlockName}-content`,
  `${clsBlockName}-content-${props.size}`,
  "select-none",
]);

const props: SelectProps = defineProps(selectProps);
const emits = defineEmits<{
  (e: "change", value: SelectValue): void;
}>();
const slots = useSlots();

if (props.multiple) {
  if (!model.value || !Array.isArray(model.value)) {
    model.value = [];
    labelModel.value = [];
  }
}

const isOpen = ref<boolean>(false);
const hasOptions = ref(false);

const open = () => (isOpen.value = true);
const close = () => (isOpen.value = false);

const handleMouseEnter = () => {
  if (!props.clearable) return;
  showClear.value = true;
};
const handleMouseLeave = () => {
  if (!props.clearable) return;
  showClear.value = false;
};

const showClear = ref<boolean>(false);
const handleClear = () => {
  if (props.multiple) {
    labelModel.value = [];
    model.value = [];
  } else {
    labelModel.value = "";
    model.value = "";
  }
};

provide(selectInjectionKey, {
  modelValue: model as unknown as SelectValue,
  multiple: props.multiple,
  onSelect: (v: SelectValue, payload: SelectOption) => {
    if (props.multiple) {
      const modelArray = model.value as SelectValue[];
      const labelArray = labelModel.value as string[];

      const valueIndex = modelArray.indexOf(v);
      if (valueIndex !== -1) {
        modelArray.splice(valueIndex, 1);
        labelArray.splice(valueIndex, 1);
        emits("change", v);
        return;
      }

      modelArray.push(v);
      labelArray.push(payload.label);
      emits("change", v);
    } else {
      model.value = v;
      labelModel.value = payload.label;
      isOpen.value = false;
    }
    emits("change", v);
  },
});

watchEffect(() => {
  try {
    const children = getAllElements(slots.default?.({}), true).filter((item) => get(item, "type.name") === "Option");
    hasOptions.value = children.length !== 0;

    if (
      model.value === null ||
      model.value === undefined ||
      model.value === "" ||
      (Array.isArray(model.value) && model.value.length === 0)
    ) {
      // oxlint-disable-next-line no-unused-expressions
      props.multiple ? (labelModel.value = []) : (labelModel.value = "");
      return;
    }

    const valueMap: Record<string, string> = {};
    for (const item of children) {
      valueMap[item.props?.value as string] =
        (item.props?.label as string) || item?.children?.["default"]?.()[0].children;
    }
    if (!props.multiple) {
      labelModel.value = valueMap[model.value as string] || String(model.value);
      return;
    }

    if (Array.isArray(model.value)) {
      labelModel.value = model.value
        .filter((item): item is string | number => typeof item === "string" || typeof item === "number")
        .map((item) => valueMap[item as string]);
    } else {
      labelModel.value = [];
    }
  } catch (error) {
    console.warn("[bp-select] watchEffect error:", error);
  }
});

defineExpose({
  open,
  close,
});
</script>
