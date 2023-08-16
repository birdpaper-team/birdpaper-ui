<template>
  <div :class="name">
    <teleport to="body">
      <transition name="tooltip-fade">
        <div ref="containerRef" v-show="visible" :class="`${name}-container`">
          <div :class="`${name}-content`">
            {{ content }}
          </div>
          <div class="triangle"></div>
        </div>
      </transition>
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

    const containerRef = ref();
    const slotRef = ref();

    const visible = ref<boolean>(false);
    const handleResize = () => {
      const slotRect = slotRef.value?.getBoundingClientRect();
      if (!slotRect) return;

      containerRef.value.setAttribute(
        "style",
        `top:${slotRect.top - 10}px;left:${
          slotRect.left + slotRect.width / 2
        }px;transform: translateX(-50%) translateY(-100%);display:${visible.value ? "block" : "none"}`
      );
    };

    const mouseenter = () => {
      handleResize();
      visible.value = true;
    };

    const mouseleave = () => {
      visible.value = false;
    };

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
      containerRef,
      visible,
      mouseenter,
      mouseleave,
    };
  },
};
</script>
