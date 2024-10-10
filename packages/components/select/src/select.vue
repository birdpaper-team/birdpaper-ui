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
    <bp-input
      v-model="labelModel"
      read-only
      :size
      :disabled
      :placeholder="placeholder"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
    >
      <template #suffix>
        <IconCloseLine v-if="!disabled && showClear && labelModel" @click.stop="handleClear" />
        <component v-else :is="isOpen ? IconArrowUpSLine : IconArrowDownSLine"></component>
      </template>
    </bp-input>

    <template #content>
      <ul :class="`${clsBlockName}-content select-none`">
        <slot v-if="hasOptions"></slot>

        <div v-else :class="`${clsBlockName}-empty`">Empty.</div>
      </ul>
    </template>
  </bp-trigger>
</template>

<script setup lang="ts">
import BpInput from "@birdpaper-ui/components/input/index";
import BpTrigger from "@birdpaper-ui/components/trigger/index";
import { useNamespace } from "@birdpaper-ui/hooks";
import { SelectProps, selectProps } from "./props";
import { selectInjectionKey, SelectOption, SelectValue } from "./types";
import { IconArrowDownSLine, IconArrowUpSLine } from "birdpaper-icon";
import { provide, ref, useSlots, watchEffect } from "vue";
import { getAllElements } from "@birdpaper-ui/components/utils/dom";
import { IconCloseLine } from "birdpaper-icon";
import { get } from "radash";

defineOptions({ name: "Select" });
const { clsBlockName } = useNamespace("select");

const model = defineModel<SelectValue>({ default: "" });
const labelModel = ref<string>("");

const props: SelectProps = defineProps(selectProps);
const slots = useSlots();

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
  labelModel.value = "";
  model.value = "";
};

provide(selectInjectionKey, {
  modelValue: model as unknown as SelectValue,
  onSelect: (v: SelectValue, payload: SelectOption) => {
    model.value = v;
    labelModel.value = payload.label;

    isOpen.value = false;
  },
});

watchEffect(() => {
  try {
    const children = getAllElements(slots.default?.(), true).filter((item) => get(item, "type.name") === "Option");
    hasOptions.value = children.length !== 0;

    if (!model.value) return;

    let valueMap = {};
    for (const item of children) {
      valueMap[item.props?.value] = item.props?.label || item?.children?.["default"]?.()[0].children;
    }

    labelModel.value = valueMap[model.value] || model.value;
  } catch (error) {
    return {};
  }
});

defineExpose({
  open,
  close,
});
</script>
