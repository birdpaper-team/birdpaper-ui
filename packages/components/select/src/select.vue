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
    <bp-input ref="inpRef" :disabled="disabled" v-model="model" readonly :placeholder="placeholder">
      <template #suffix>
        <IconArrowDownSLine />
      </template>
    </bp-input>

    <template #content>
      <ul :class="`${clsBlockName}-content select-none`">
        <slot v-if="hasOptions"></slot>

        <div v-else>Empty.</div>
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
import { IconArrowDownSLine } from "birdpaper-icon";
import { computed, provide, ref, useSlots, VNode, watch } from "vue";
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

const currentSelect = ref<SelectOption>(new SelectOption());
provide(selectInjectionKey, {
  modelValue: model.value,
  currentSelect: currentSelect.value,
  onSelect: (v: SelectValue, payload: SelectOption) => {
    currentSelect.value.value = v;
    currentSelect.value.label = payload.label;

    isFocus.value = false;
  },
});

const setValue = () => {
  currentSelect.value.value = model.value;
  currentSelect.value.label = valueMap.value[currentSelect.value.value];
};

watch(
  () => valueMap.value,
  () => setValue(),
  {
    immediate: true,
    deep: true,
  }
);
</script>
