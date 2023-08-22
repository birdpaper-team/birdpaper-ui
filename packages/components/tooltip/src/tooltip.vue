<template>
  <teleport to="body" v-if="show">
    <transition name="tooltip-fade">
      <div ref="containerRef" v-show="visible" :class="`${name}-container`" v-clickOutside="closeTool">
        <div :class="`${name}-content`">
          <template v-if="!slots.content">
            {{ content }}
          </template>
          <slot name="content"></slot>
        </div>
        <div class="triangle"></div>
      </div>
    </transition>
  </teleport>

  <div ref="slotRef" :class="`${name}-inner`" @click="handleClick" @mouseenter="mouseenter" @mouseleave="mouseleave">
    <slot />
  </div>
</template>

<script lang="ts">
import { PropType } from "vue";
import { off, on, throttle } from "../../../utils/util";
import { vClickOutside } from "../../../directives/clickOutside";
import { defineComponent, nextTick, onBeforeUnmount, onMounted, ref } from "vue";

export default defineComponent({
  name: "Tooltip",
  props: {
    /** 文本提示内容 */
    content: { type: String, default: "" },
    /** 触发方式 */
    trigger: { type: String as PropType<"hover" | "click">, default: "hover" },
  },
  directives: { clickOutside: vClickOutside },
  setup(props, { slots }) {
    const name = "bp-tooltip";

    const containerRef = ref();
    const slotRef = ref();

    const show = ref<boolean>(false);
    const visible = ref<boolean>(false);
    const handleResize = () => {
      const slotRect = slotRef.value?.getBoundingClientRect();
      if (!slotRect) return;

      const top = slotRect.top - 10 + document.documentElement.scrollTop;

      containerRef.value &&
        containerRef.value.setAttribute(
          "style",
          `top:${top}px;left:${
            slotRect.left + slotRect.width / 2
          }px;transform: translateX(-50%) translateY(-100%);display:${visible.value ? "block" : "none"}`
        );
    };

    const handleClick = () => {
      if (props.trigger === "hover") return;
      show.value ? closeTool() : openTool();
    };

    const mouseenter = () => {
      if (props.trigger === "click") return;
      openTool();
    };

    const mouseleave = () => {
      if (props.trigger === "click") return;
      closeTool();
    };

    /** 打开提示框 */
    const openTool = () => {
      show.value = true;

      setTimeout(() => {
        handleResize();
        visible.value = true;
      }, 50);
    };

    /** 关闭提示框 */
    const closeTool = () => {
      if(!visible.value) return;
      visible.value = false;

      setTimeout(() => {
        show.value = false;
      }, 50);
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
      show,
      visible,
      slots,
      mouseenter,
      mouseleave,
      openTool,
      closeTool,
      handleClick,
    };
  },
});
</script>
