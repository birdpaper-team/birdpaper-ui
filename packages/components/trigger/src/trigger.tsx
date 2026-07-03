import { Teleport, Transition, defineComponent, h, inject, nextTick, onMounted, ref, watch, VNode, computed } from "vue";
import { getPosition, getPositionData, getWrapperPositionStyle, getWrapperSize } from "./core";
import { TriggerPosition } from "./types";
import { triggerProps } from "./props";
import { onClickOutside, useElementBounding, useEventListener, useThrottleFn, useWindowSize } from "@vueuse/core";
import { getScrollElements } from "@birdpaper-ui/components/utils/dom";
import { useNamespace, popupZIndexKey } from "@birdpaper-ui/hooks";

export default defineComponent({
  name: "Trigger",
  props: triggerProps,
  emits: ["update:modelValue", "popupVisible", "positionChange"],
  setup(props, { emit, slots }) {
    const { clsBlockName } = useNamespace("trigger");

    const triggerRef = ref();
    const triggerInnerRef = ref<HTMLElement | null>(null);
    const wrapperRef = ref();
    const visible = ref<boolean>(props.modelValue || false);
    const scrollElements = ref<Element[]>([]);
    const hoverTimer = ref();
    const scrollCloseTimer = ref();
    const windowSize = useWindowSize();
    const popupContainer = ref<HTMLElement>();
    const currentPosition = ref<TriggerPosition>(props.position);
    const triggerBounding = useElementBounding(triggerInnerRef as any);
    const injectedZIndex = inject(popupZIndexKey, ref(0));

    // Update popup container
    const updatePopupContainer = () => {
      try {
        const container = props.getPopupContainer?.();
        if (container && container.nodeType === Node.ELEMENT_NODE) {
          popupContainer.value = container;
          return;
        }
      } catch (error) {
        console.error("Error in getPopupContainer:", error);
      }
      popupContainer.value = document.body;
    };

    const handleClick = () => {
      if (props.trigger === "hover" || props.disabled) return;
      updateVisible(!visible.value);
      nextTick(() => handleResize());
    };
    const handleMouseEnter = () => {
      if (props.trigger === "click") return;

      window.clearTimeout(hoverTimer.value);
      hoverTimer.value = 0;
      if (props.openDelay > 0) {
        hoverTimer.value = window.setTimeout(() => {
          updateVisible(true);
          nextTick(() => handleResize());
        }, props.openDelay);
        return;
      }
      updateVisible(true);
      nextTick(() => handleResize());
    };
    const handleMouseLeave = () => {
      if (props.trigger === "click") return;
      window.clearTimeout(hoverTimer.value);
      hoverTimer.value = window.setTimeout(() => updateVisible(false), props.closeDelay);
    };

    const handleResize = () => {
      if (!triggerRef.value || !visible.value || !wrapperRef.value) return;

      const el = triggerInnerRef.value;
      if (!el) return;
      const wrapperSize = getWrapperSize(wrapperRef.value);

      // showArrow 时自动增加偏移，为箭头留出空间
      const arrowOffset = props.showArrow ? 6 : 0;
      const totalOffset = props.popupOffset + arrowOffset;

      const position = props.autoFixPosition
        ? getPosition(
            props.position,
            windowSize,
            triggerBounding,
            wrapperSize,
            totalOffset,
            props.popupTranslate,
            props.boundaryPadding
          )
        : props.position;

      const { top, left, width } = getPositionData(
        el,
        position,
        wrapperSize,
        props.popupTranslate,
        totalOffset,
        props.autoFitWidth
      );
      currentPosition.value = position;
      emit("positionChange", { position, top, left, width });
      const styleStr = getWrapperPositionStyle(top, left, visible.value, props.autoFitWidth ? width : undefined, injectedZIndex.value || undefined);
      wrapperRef.value.setAttribute("style", styleStr);

      if (props.scrollToClose && visible.value) {
        window.clearTimeout(scrollCloseTimer.value);
        scrollCloseTimer.value = window.setTimeout(() => {
          visible.value = false;
        }, props.scrollToCloseTime);
      }
    };

    const updateVisible = (val: boolean) => {
      visible.value = val;
      emit("update:modelValue", visible.value);
      emit("popupVisible", visible.value);
    };

    const throttleResize = useThrottleFn(handleResize, props.throttleTime);
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

    onMounted(() => {
      nextTick(() => {
        updatePopupContainer();
        init();
      });
    });

    onClickOutside(
      wrapperRef,
      () => {
        if (!props.clickOutside || props.trigger === "hover") return;
        visible.value = false;
        emit("update:modelValue", visible.value);
      },
      { ignore: [triggerRef] }
    );

    watch(
      () => props.modelValue,
      (v: boolean) => {
        visible.value = v;
        v && nextTick(() => handleResize());
      }
    );

    const wrapperInitStyle = computed(() => {
      const style: Record<string, string | number> = { position: "absolute" };
      if (injectedZIndex.value > 0) {
        style.zIndex = injectedZIndex.value;
      }
      return style;
    });

    const wrapperProps = (baseClass: string) => ({
      ref: wrapperRef,
      class: [baseClass, props.showArrow && `${baseClass}-arrow`],
      style: wrapperInitStyle.value,
      onMouseenter: handleMouseEnter,
      onMouseleave: handleMouseLeave,
    });

    const render = () => {
      const children = slots.default?.() || [];
      const triggerNode =
        children.length === 1 ? children[0] : h("div", { class: `${clsBlockName.value}-trigger` }, children);

      if (props.hideTrigger) {
        return h("div", { class: clsBlockName.value, ref: triggerRef }, slots.content?.());
      }

      // 在测试环境中不使用Teleport（jsdom不完整支持），直接渲染内容
      // @ts-ignore
      const isTestEnv = (import.meta.env?.MODE || "").toLowerCase() === "test";
      const wrapperCls = `${clsBlockName.value}-wrapper`;
      const renderArrow = () =>
        props.showArrow
          ? h("div", { class: `${clsBlockName.value}-arrow ${clsBlockName.value}-arrow-${currentPosition.value}` })
          : null;
      const renderContent = () => [
        h(Transition, { name: props.transition, appear: true }, () =>
          visible.value ? h("div", wrapperProps(wrapperCls), [renderArrow(), slots.content?.()]) : null
        ),
      ];
      const triggerInner = () =>
        h(
          "div",
          {
            class: `${clsBlockName.value}-inner`,
            ref: triggerInnerRef,
            onClickCapture: handleClick,
            onMouseenter: handleMouseEnter,
            onMouseleave: handleMouseLeave,
          },
          [triggerNode]
        );

      if (isTestEnv) {
        return h("div", { class: clsBlockName.value, ref: triggerRef }, [triggerInner(), ...renderContent()]);
      }

      // 检查popupContainer是否有效
      const isValidContainer =
        popupContainer.value &&
        typeof popupContainer.value === "object" &&
        popupContainer.value.nodeType === Node.ELEMENT_NODE;

      // 如果容器无效，直接渲染内容而不使用Teleport
      if (!isValidContainer) {
        return h("div", { class: clsBlockName.value, ref: triggerRef }, [triggerInner(), ...renderContent()]);
      }

      // 正式环境使用Teleport
      return h("div", { class: clsBlockName.value, ref: triggerRef }, [
        triggerInner(),
        h(Teleport, { to: popupContainer.value }, renderContent()),
      ]);
    };

    return render;
  },
});
