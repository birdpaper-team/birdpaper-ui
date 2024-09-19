<template>
  <div ref="triggerRef" :class="clsBlockName">
    <component :is="children[0]" @click="handleClick" @mouseenter="mouseEnter" @mouseleave="mouseLeave"></component>

    <Teleport to="body">
      <Transition :name="transition" appear>
        <div
          ref="wrapperRef"
          v-if="model"
          :class="`${clsBlockName}-wrapper`"
          @mouseenter="mouseEnter"
          @mouseleave="mouseLeave"
        >
          <slot name="content"></slot>
        </div>
      </Transition>
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

  model.value = !model.value;
  nextTick(() => handleResize());
};

const mouseEnter = () => {
  if (props.trigger === "click") return;

  model.value = true;
  nextTick(() => handleResize());
};

const mouseLeave = () => {
  if (props.trigger === "click") return;
  model.value = false;
};

const handleResize = () => {
  if (!triggerRef.value || !model.value) return;

  const wrapperSize = getWrapperSize(wrapperRef.value);
  const { top, left, width } = getPositionData(
    triggerRef.value?.children[0],
    props.position,
    wrapperSize,
    props.popupTranslate,
    props.popupOffset,
    props.autoFitWidth
  );

  wrapperRef.value.setAttribute(
    "style",
    getWrapperPositionStyle(top, left, model.value, props.autoFitWidth ? width : undefined)
  );

  if (props.scrollToClose && model.value) {
    setTimeout(() => {
      model.value = false;
    }, props.scrollToCloseTime);
  }
};

onClickOutside(
  wrapperRef,
  () => {
    if (!props.clickOutside || props.trigger === "hover") return;
    model.value = false;
  },
  { ignore: [triggerRef] }
);

// Listen scroll and window resize.
const throttleResize = useThrottleFn(handleResize, 20);
const scrollElements = ref<Element[]>([]);
const init = () => {
  useEventListener(window, "resize", throttleResize);

  nextTick(() => {
    if (props.updateAtScroll) {
      scrollElements.value = getScrollElements(triggerRef.value);

      for (const item of scrollElements.value) {
        useEventListener(item, "scroll", throttleResize);
      }
    }
  });
};

onMounted(() => init());
</script>
