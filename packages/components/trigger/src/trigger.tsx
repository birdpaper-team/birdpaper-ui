import { PropType, Teleport, Transition, defineComponent, h, nextTick, ref, watch } from "vue";
import { getPosition, getPositionData, getWrapperPositionStyle, getWrapperSize } from "./core";
import { TriggerPosition, TriggerType } from "./types";
import { onClickOutside, useElementBounding, useEventListener, useThrottleFn, useWindowSize } from "@vueuse/core";
import { getScrollElements } from "@birdpaper-ui/components/utils/dom";
import { useNamespace } from "@birdpaper-ui/hooks";

export default defineComponent({
  name: "Trigger",
  props: {
    /**
     * @type boolean
     * @description Visible model.
     * @default false
     */
    modelValue: { type: Boolean, default: false },
    /**
     * @type TriggerType
     * @description Trigger type.
     * @default "click"
     */
    trigger: {
      type: String as PropType<TriggerType>,
      default: "click",
    },
    /**
     * @type TriggerPosition
     * @description Trigger position.
     * @default "bottom"
     */
    position: {
      type: String as PropType<TriggerPosition>,
      default: "bottom",
    },
    /**
     * @type number
     * @description Offset of the popup box.
     * @default 0
     */
    popupOffset: {
      type: Number,
      default: 0,
    },
    /**
     * @type [number, number]
     * @description Distance from the trigger.
     * @default: [0, 0]
     */
    popupTranslate: {
      type: Array as unknown as PropType<[number, number]>,
      default: [0, 0],
    },
    /**
     * @type boolean
     * @description Fill the trigger width or not.
     * @default false
     */
    autoFitWidth: {
      type: Boolean,
      default: false,
    },
    /**
     * @type string
     * @description Transition name.
     * @default "fade"
     */
    transition: {
      type: String,
      default: "fade",
    },
    /**
     * @type boolean
     * @description Click on the external element to close the trigger.
     * @default true
     */
    clickOutside: {
      type: Boolean,
      default: true,
    },
    /**
     * @type boolean
     * @description  Disabled or not.
     * @default false
     */
    disabled: {
      type: Boolean,
      default: false,
    },
    /**
     * @type boolean
     * @description Hide the trigger element or not.
     * @default false
     */
    hideTrigger: {
      type: Boolean,
      default: false,
    },
    /**
     * @type boolean
     * @description Update position when scroll or not.
     * @default false
     */
    updateAtScroll: {
      type: Boolean,
      default: false,
    },
    /**
     * @type boolean
     * @description Close when scroll or not.
     * @default false
     */
    scrollToClose: {
      type: Boolean,
      default: false,
    },
    /**
     * @type boolean
     * @description Auto fix the position with window size.
     * @default false
     */
    autoFitPosition: {
      type: Boolean,
      default: true,
    },
    /**
     * @type number
     * @description Scroll close time.
     * @default 400
     */
    scrollToCloseTime: {
      type: Number,
      default: 400,
    },
  },
  emits: ["update:modelValue"],
  setup(props, { emit, slots }) {
    const { clsBlockName } = useNamespace("trigger");

    const triggerRef = ref();
    const wrapperRef = ref();
    const visible = ref<boolean>(props.modelValue || false);
    const scrollElements = ref<Element[]>([]);
    const timer = ref();
    const windowSize = useWindowSize();

    const handleClick = () => {
      if (props.trigger === "hover" || props.disabled) return;
      updateVisible(!visible.value);
      nextTick(() => handleResize());
    };
    const handleMouseEnter = () => {
      if (props.trigger === "click") return;

      window.clearTimeout(timer.value);
      timer.value = 0;
      updateVisible(true);
      nextTick(() => handleResize());
    };
    const handleMouseLeave = () => {
      if (props.trigger === "click") return;
      timer.value = window.setTimeout(() => updateVisible(false), 100);
    };

    const handleResize = async () => {
      if (!triggerRef.value || !visible.value) return;

      const el = triggerRef.value?.children[0];
      const wrapperSize = getWrapperSize(wrapperRef.value);

      const position = props.autoFitPosition
        ? getPosition(
            props.position,
            windowSize,
            useElementBounding(el),
            wrapperSize,
            props.popupOffset,
            props.popupTranslate
          )
        : props.position;

      const { top, left, width } = getPositionData(
        el,
        position,
        wrapperSize,
        props.popupTranslate,
        props.popupOffset,
        props.autoFitWidth
      );
      wrapperRef.value.setAttribute(
        "style",
        getWrapperPositionStyle(top, left, visible.value, props.autoFitWidth ? width : undefined)
      );

      if (props.scrollToClose && visible.value) {
        setTimeout(() => {
          visible.value = false;
        }, props.scrollToCloseTime);
      }
    };
    const updateVisible = (val: boolean) => {
      visible.value = val;
      emit("update:modelValue", visible.value);
    };

    const throttleResize = useThrottleFn(handleResize, 20);
    const init = () => {
      useEventListener(window, "resize", throttleResize);
      // useEventListener(window, "scroll", throttleResize);

      nextTick(() => {
        if (props.updateAtScroll) {
          scrollElements.value = getScrollElements(triggerRef.value);

          for (const item of scrollElements.value) {
            useEventListener(item, "scroll", throttleResize);
          }
        }
      });
    };
    init();

    onClickOutside(
      wrapperRef,
      () => {
        if (!props.clickOutside || props.trigger === "hover") return;
        visible.value = false;
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

    const render = () => {
      const children = slots.default?.() || [];

      return props.hideTrigger ? (
        slots.content?.()
      ) : (
        <div class={clsBlockName} ref={triggerRef}>
          {h(children[0], {
            onClick: handleClick,
            onMouseenter: handleMouseEnter,
            onMouseleave: handleMouseLeave,
          })}
          <Teleport to="body">
            <Transition name={props.transition} appear>
              {visible.value ? (
                <div
                  ref={wrapperRef}
                  class={`${clsBlockName}-wrapper`}
                  onMouseenter={handleMouseEnter}
                  onMouseleave={handleMouseLeave}
                >
                  {slots.content?.()}
                </div>
              ) : null}
            </Transition>
          </Teleport>
        </div>
      );
    };

    return render;
  },
});
