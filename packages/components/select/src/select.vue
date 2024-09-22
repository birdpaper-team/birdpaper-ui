<template>
  <bp-trigger
    v-model="isFocus"
    transition="fade-dropdown"
    :class="clsBlockName"
    :disabled="disabled"
    :popup-offset="10"
    auto-fit-width
    update-at-scroll
  >
    <bp-input
      :disabled="disabled"
      v-model="currentSelect.label"
      :placeholder="placeholder"
      readonly
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
    >
      <template #suffix>
        <IconCloseLine
          v-if="!disabled && showClear && currentSelect.label"
          class="click-icon"
          @click.stop="handleClear"
        />
        <component v-else :is="isFocus ? IconArrowUpSLine : IconArrowDownSLine"></component>
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
import { computed, provide, reactive, ref, useSlots, watchEffect } from "vue";
import { getAllElements } from "@birdpaper-ui/components/utils/dom";

defineOptions({ name: "Select" });
const { clsBlockName } = useNamespace("select");

const model = defineModel<SelectValue>({ default: "" });
const props: SelectProps = defineProps(selectProps);
const slots = useSlots();

const isFocus = ref<boolean>(false);

const hasOptions = computed(() => {
  const children = getAllElements(slots.default?.(), true).filter((item) => item.type["name"] === "Option");
  return children.length !== 0;
});

const valueMap = computed(() => {
  try {
    let obj = {};
    const children = getAllElements(slots.default?.(), true).filter((item) => item.type["name"] === "Option");

    for (const item of children) {
      obj[item.props?.value] = item.props?.label || item?.children?.["default"]?.()[0].children;
    }
    return obj;
  } catch (error) {
    return {};
  }
});

const showClear = ref<boolean>(false);
const handleMouseEnter = () => {
  if (!props.clearable) return;
  showClear.value = true;
};
const handleMouseLeave = () => {
  if (!props.clearable) return;
  showClear.value = false;
};

const handleClear = () => {
  currentSelect.value = "";
  currentSelect.label = "";
};

const currentSelect = reactive<SelectOption>(new SelectOption());
provide(selectInjectionKey, {
  modelValue: model.value,
  currentSelect: currentSelect,
  onSelect: (v: SelectValue, payload: SelectOption) => {
    currentSelect.value = v;
    currentSelect.label = payload.label;
    model.value = v;

    isFocus.value = false;
  },
});

watchEffect(() => {
  if (!model.value) {
    return;
  }
  currentSelect.value = model.value;
  currentSelect.label = valueMap.value[model.value] || model.value;
});
</script>
