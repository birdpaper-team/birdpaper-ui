import {
  PropType,
  Teleport,
  Transition,
  defineComponent,
  h,
  nextTick,
  onBeforeUnmount,
  onMounted,
  ref,
  watch,
} from "vue";
import { getPositionData, getWrapperPositionStyle, getWrapperSize } from "./core";
import { TriggerPosition } from "./types";
import { off, on, throttle } from "../../../utils/util";
import { vClickOutside } from "../../../directives/clickOutside";

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
    /** 弹出层是否填充触发器宽度 */
    autoFitWidth: { type: Boolean, default: false },
    /** 过渡动画名称 */
    transition: { type: String, default: "fade" },
  },
  emits: ["update:popupVisible"],
  setup(props, { emit, slots }) {
    const name = "bp-trigger";

    const triggerRef = ref();
    const warpperRef = ref();
    const visible = ref<boolean>(props.popupVisible || false);
    const clickOutsideLock = ref<boolean>(true);

    const handleClick = () => {
      if (props.trigger === "hover") return;

      handleResize();
      updateVisible(!visible.value);
    };
    const handleMouseEnter = () => {
      if (props.trigger === "click") return;

      handleResize();
      updateVisible(true);
    };
    const handleMouseLeave = () => {
      if (props.trigger === "click") return;

      updateVisible(false);
    };

    const handleResize = () => {
      const { top, left, width } = getPositionData(
        triggerRef.value.children[0],
        props.position,
        getWrapperSize(warpperRef.value),
        props.popupOffset
      );

      const styleStr = getWrapperPositionStyle(top, left, visible.value, props.autoFitWidth ? width : null);
      warpperRef.value.setAttribute("style", styleStr);
    };

    const onClickOutside = () => !clickOutsideLock.value && updateVisible(false);

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
        on(window, "resize", throttle(handleResize, 100));
      });
    });

    onBeforeUnmount(() => {
      off(window, "resize", handleResize);
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

      return (
        <div class={name} ref={triggerRef}>
          {h(children[0], {
            onClick: handleClick,
            onMouseenter: handleMouseEnter,
            onMouseleave: handleMouseLeave,
          })}
          <Teleport to="body">
            <Transition name={props.transition} appear>
              <div
                ref={warpperRef}
                v-show={visible.value}
                class={`${name}-warpper`}
                onMouseenter={handleMouseEnter}
                onMouseleave={handleMouseLeave}
                v-clickOutside={onClickOutside}
              >
                <div class={`${name}-content`}>{slots.content?.()}</div>
              </div>
            </Transition>
          </Teleport>
        </div>
      );
    };

    return render;
  },
});
