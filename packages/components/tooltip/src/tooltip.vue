<template>
  <div :class="name">
    <teleport to="body">
      <div ref="innerRef" :class="`${name}-content`">
        <span>{{ content }}</span>
      </div>
    </teleport>

    <div ref="slotRef" :class="`${name}-inner`" @mouseenter="mouseenter" @mouseleave="mouseleave">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { off, on, throttle } from "../../../utils/util";
import { nextTick, onBeforeUnmount, onMounted, ref } from "vue";

export default {
  name: "Tooltip",
  props: {
    content: { type: String, default: "" },
  },
  setup(props, { slots }) {
    const name = "bp-tooltip";

    const innerRef = ref();
    const slotRef = ref();
    const handleResize = () => {
      const slotRect = slotRef.value?.getBoundingClientRect();
      if (!slotRect) return;

      innerRef.value.setAttribute(
        "style",
        `top:${slotRect.top - 10}px;left:${
          slotRect.left + slotRect.width / 2
        }px;transform: translateX(-50%) translateY(-100%);;display:"block"`
      );
    };

    const mouseenter = () => {};

    const mouseleave = () => {};

    onMounted(() => {
      nextTick(() => {
        on(window, "resize", throttle(handleResize, 100));
      });
    });

    onBeforeUnmount(() => {
      off(window, "resize", handleResize);
    });

    return {
      name,
      slotRef,
      innerRef,
      mouseenter,
      mouseleave,
    };
  },
};
</script>
