import { PropType, Teleport, Transition, defineComponent, h, nextTick, onBeforeUnmount, onMounted, ref, watch } from "vue";
import { getPositionData, getWrapperPositionStyle, getWrapperSize } from "./core";
import { TriggerPosition } from "./types";
import { off, on, throttle } from "../../../utils/util";
import { vClickOutside } from "../../../directives/clickOutside";
import { getScrollElements } from "../../../utils/dom";

export default defineComponent({
  name: "Trigger",
  directives: { clickOutside: vClickOutside },
  props: {
    popupVisible: { type: Boolean, default: false },
    /** 触发方式 */
    trigger: { type: String, default: "click" },
    /** 弹出位置 */
    position: { type: String as PropType<TriggerPosition>, default: "bottom" },
    /** 距离弹出位置的偏移量 */
    popupOffset: { type: Number, default: 10 },
    /** 距离弹出位置的移动距离 */
    popupTranslate: { type: Array as unknown as PropType<[number, number]>, default: [0, 0] },
    /** 弹出层是否填充触发器宽度 */
    autoFitWidth: { type: Boolean, default: false },
    /** 过渡动画名称 */
    transition: { type: String, default: "fade" },
    /** 点击其他元素关闭触发器 */
    clickOutside: { type: Boolean, default: true },
    /** 是否禁用 Disabled or not */
    disabled: { type: Boolean, default: false },
    /** 隐藏触发器 */
    hideTrigger: { type: Boolean, default: false },
    /** 是否跟随滚动元素更新 */
    updateAtScroll: { type: Boolean, default: false },
    /** 是否在滚动时关闭 */
    scrollToClose: { type: Boolean, default: false },
    /** 滚动触发关闭的时间 */
    scrollToCloseTime: { type: Number, default: 400 },
  },
  emits: ["update:popupVisible"],
  setup(props, { emit, slots }) {
    const name = "bp-trigger";

    const triggerRef = ref();
    const wrapperRef = ref();
    const visible = ref<boolean>(props.popupVisible || false);
    const clickOutsideLock = ref<boolean>(true);
    const scrollElements = ref<Element[]>([]);

    const handleClick = () => {
      if (props.trigger === "hover" || props.disabled) return;

      updateVisible(!visible.value);
      handleResize();
    };
    const handleMouseEnter = () => {
      if (props.trigger === "click") return;

      updateVisible(true);
      handleResize();
    };
    const handleMouseLeave = () => {
      if (props.trigger === "click") return;

      updateVisible(false);
    };

    const handleResize = () => {
      if (!triggerRef.value || !visible.value) return;

      const wrapperSize = getWrapperSize(wrapperRef.value);
      const { top, left, width } = getPositionData(
        triggerRef.value.children[0],
        props.position,
        { ...wrapperSize },
        props.popupTranslate,
        props.popupOffset,
        props.autoFitWidth
      );
      const styleStr = getWrapperPositionStyle(top, left, visible.value, props.autoFitWidth ? width : null);
      wrapperRef.value.setAttribute("style", styleStr);

      if (props.scrollToClose && visible.value) {
        setTimeout(() => {
          updateVisible(false);
        }, props.scrollToCloseTime);
      }
    };

    const onClickOutside = () => {
      if (!props.clickOutside) return;

      !clickOutsideLock.value && updateVisible(false);
    };

    const updateVisible = (val: boolean, delay: number = 100) => {
      visible.value = val;
      emit("update:popupVisible", visible.value);

      nextTick(() => {
        setTimeout(() => {
          if (props.trigger === "click") {
            clickOutsideLock.value = !visible.value;
          }
        }, delay);
      });
    };

    onMounted(() => {
      nextTick(() => {
        on(window, "resize", throttle(handleResize));

        if (props.updateAtScroll) {
          scrollElements.value = getScrollElements(triggerRef.value);

          for (const item of scrollElements.value) {
            on(item, "scroll", throttle(handleResize));
          }
        }
      });
    });

    onBeforeUnmount(() => {
      off(window, "resize", throttle(handleResize));
      off(window, "scroll", throttle(handleResize));

      if (props.updateAtScroll) {
        scrollElements.value = getScrollElements(triggerRef.value);

        for (const item of scrollElements.value) {
          off(item, "scroll", throttle(handleResize));
        }
      }
    });

    watch(
      () => props.popupVisible,
      (v: boolean) => {
        visible.value = v;
        clickOutsideLock.value = visible.value;
      }
    );

    const render = () => {
      const children = slots.default?.() || [];

      return props.hideTrigger ? (
        slots.content?.()
      ) : (
        <div class={name} ref={triggerRef} id="triggerRef">
          {h(children[0], {
            onClick: handleClick,
            onMouseenter: handleMouseEnter,
            onMouseleave: handleMouseLeave,
          })}
          <Teleport to="body">
            <Transition name={props.transition} appear>
              <div
                ref={wrapperRef}
                v-show={visible.value}
                class={`${name}-wrapper`}
                onMouseenter={handleMouseEnter}
                onMouseleave={handleMouseLeave}
                v-clickOutside={onClickOutside}>
                {slots.content?.()}
              </div>
            </Transition>
          </Teleport>
        </div>
      );
    };

    return render;
  },
});
