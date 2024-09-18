<template>
  <div ref="triggerRef" :class="clsBlockName">
    <component :is="children[0]" @click="handleClick" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave"></component>

    <Teleport to="body">
      <div ref="wrapperRef" v-if="model" :class="`${clsBlockName}-wrapper`" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
        <slot name="content"></slot>
      </div>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { useNamespace } from "@birdpaper-ui/hooks";
import { nextTick, onMounted, ref, useSlots } from "vue";
import { onClickOutside, useEventListener, useThrottleFn } from "@vueuse/core";
import { triggerProps, TriggerProps } from "./props";
import { getPositionData, getWrapperPositionStyle, getWrapperSize } from "./core";
import { getScrollElements } from "@birdpaper-ui/components/utils/dom";

defineOptions({ name: "Trigger" });
const { clsBlockName } = useNamespace("trigger");

const model = defineModel<boolean>({ default: false });
const props: TriggerProps = defineProps(triggerProps);
const slots = useSlots();

const triggerRef = ref();
const wrapperRef = ref();
const children = slots.default?.() || [];

const handleClick = () => {
  if (props.trigger === "hover" || props.disabled) return;

  updateVisible(!model.value);
  nextTick(() => {
    handleResize();
  });
};
const handleMouseEnter = () => {
  if (props.trigger === "click") return;

  updateVisible(true);
  nextTick(() => {
    handleResize();
  });
};

const handleMouseLeave = () => {
  if (props.trigger === "click") return;

  updateVisible(false);
};

const handleResize = () => {
  if (!triggerRef.value || !model.value) return;

  const wrapperSize = getWrapperSize(wrapperRef.value);
  const { top, left, width } = getPositionData(triggerRef.value.children[0], props.position, { ...wrapperSize }, props.popupTranslate, props.popupOffset, props.autoFitWidth);

  const styleStr = getWrapperPositionStyle(top, left, model.value, props.autoFitWidth ? width : undefined);
  wrapperRef.value.setAttribute("style", styleStr);

  if (props.scrollToClose && model.value) {
    setTimeout(() => {
      updateVisible(false);
    }, props.scrollToCloseTime);
  }
};

const updateVisible = (val: boolean) => {
  model.value = val;
};

onClickOutside(wrapperRef, (event) => {
  model.value = false;
});

const throttleResize = useThrottleFn(handleResize, 20);
useEventListener(window, "resize", throttleResize);

const scrollElements = ref<Element[]>([]);
onMounted(() => {
  nextTick(() => {
    if (props.updateAtScroll) {
      scrollElements.value = getScrollElements(triggerRef.value);

      for (const item of scrollElements.value) {
        useEventListener(item, "scroll", throttleResize);
      }
    }
  });
});
</script>
