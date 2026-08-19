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
      v-model="tagLabels"
      :placeholder="tagLabels.length === 0 ? placeholder : ''"
      :max-tag-count="maxTagCount"
      :disabled="disabled"
      :allow-create="false"
      @remove="handleTagRemove"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
    ></bp-input-tag>

    <bp-input
      v-else
      v-model="singleLabel"
      readonly
      :size="size"
      :disabled="disabled"
      :placeholder="placeholder"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
    >
      <template #suffix>
        <IconCloseLine v-if="!props.disabled && showClear && singleLabel" @click.stop="handleClear" />
        <component v-else :is="isOpen ? IconArrowUpSLine : IconArrowDownSLine"></component>
      </template>
    </bp-input>

    <template #content>
      <ul :class="optionListCls" role="listbox">
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
import { IconArrowDownSLine, IconArrowUpSLine, IconCloseLine } from "birdpaper-icon";
import { computed, provide, reactive, ref, toRef, useSlots, watchEffect } from "vue";
import { getAllElements } from "@birdpaper-ui/components/utils/dom";
import { get } from "radash";

defineOptions({ name: "Select" });
const { clsBlockName } = useNamespace("select");

const model = defineModel<SelectValue | SelectValue[]>({ default: "" });
const labelModel = ref<string | string[]>("");
const optionListCls = computed(() => [
  `${clsBlockName.value}-content`,
  `${clsBlockName.value}-content-${props.size}`,
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

const tagLabels = computed({
  get: () => (Array.isArray(labelModel.value) ? labelModel.value : []),
  set: (val: string[]) => {
    labelModel.value = val;
  },
});

const singleLabel = computed({
  get: () => (typeof labelModel.value === "string" ? labelModel.value : ""),
  set: (val: string) => {
    labelModel.value = val;
  },
});

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
  emits("change", model.value as SelectValue);
};

const handleTagRemove = (value: string, index: number) => {
  if (!Array.isArray(model.value)) return;
  const removed = model.value[index];
  model.value = model.value.filter((_, i) => i !== index);
  emits("change", (removed ?? value) as SelectValue);
};

provide(
  selectInjectionKey,
  reactive({
    modelValue: model,
    multiple: toRef(props, "multiple"),
    onSelect: (v: SelectValue, payload: SelectOption) => {
      if (props.multiple) {
        const modelArray = model.value as SelectValue[];
        const labelArray = (labelModel.value as string[]) || [];

        const valueIndex = modelArray.indexOf(v);
        if (valueIndex !== -1) {
          model.value = modelArray.filter((_, i) => i !== valueIndex);
          labelModel.value = labelArray.filter((_, i) => i !== valueIndex);
          emits("change", v);
          return;
        }

        model.value = [...modelArray, v];
        labelModel.value = [...labelArray, payload.label];
        emits("change", v);
        return;
      }

      model.value = v;
      labelModel.value = payload.label;
      isOpen.value = false;
      emits("change", v);
    },
  })
);

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
      props.multiple ? (labelModel.value = []) : (labelModel.value = "");
      return;
    }

    const valueMap: Record<string, string> = {};
    for (const item of children) {
      const slotContent =
        item.children && typeof item.children === "object" && !Array.isArray(item.children)
          ? (item.children as Record<string, any>)["default"]?.()[0]?.children
          : undefined;
      valueMap[String(item.props?.value)] = (item.props?.label as string) || slotContent || "";
    }
    if (!props.multiple) {
      labelModel.value = valueMap[String(model.value)] || String(model.value);
      return;
    }

    if (Array.isArray(model.value)) {
      labelModel.value = model.value.map((item) => valueMap[String(item)] || String(item));
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
