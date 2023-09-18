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

    const handleClick = () => {
      if (props.trigger === "hover") return;

      handleResize();
      nextTick(() => {
        visible.value = !visible.value;
        emit("update:popupVisible", visible.value);
      });
    };
    const handleMouseEnter = () => {
      if (props.trigger === "click") return;

      handleResize();
      setTimeout(() => {
        nextTick(() => {
          visible.value = true;
          emit("update:popupVisible", visible.value);
        });
      }, 100);
    };
    const handleMouseLeave = () => {
      if (props.trigger === "click") return;

      setTimeout(() => {
        visible.value = false;
        emit("update:popupVisible", visible.value);
      }, 100);
    };

    const handleResize = () => {
      const { top, left, width } = getPositionData(
        triggerRef.value.children[0],
        props.position,
        getWrapperSize(warpperRef.value),
        props.popupOffset
      );

      warpperRef.value.setAttribute(
        "style",
        getWrapperPositionStyle(top, left, visible.value, props.autoFitWidth ? width : null)
      );
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
      }
    );

    const onClickOutside = () => {
      visible.value = false;
      emit("update:popupVisible", visible.value);
    };

    const render = () => {
      const children = slots.default?.() || [];

      return (
        <div class={name} ref={triggerRef} v-clickOutside={onClickOutside}>
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
