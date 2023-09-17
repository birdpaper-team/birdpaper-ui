import { PropType, Teleport, Transition, defineComponent, h, nextTick, ref, toRef, watch } from "vue";
import { TriggerPosition } from "./types";
import { getPositionData, getWrapperSize } from "./core";
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
    popupOffset: { type: Number, default: 0 },
    /** 是否显示箭头 */
    showArrow: { type: Boolean, default: false },
    /** 弹出层是否填充触发器宽度 */
    autoFitWidth: { type: Boolean, default: false },
  },
  emits: ["update:popupVisible"],
  setup(props, { emit, slots }) {
    const name = "bp-trigger";

    const triggerRef = ref();
    const warpperRef = ref();
    const visible = ref<boolean>(props.popupVisible || false);
    const handleClick = () => {
      const { top, left } = getPositionData(
        triggerRef.value.children[0],
        props.position,
        getWrapperSize(warpperRef.value),
        props.popupOffset
      );

      const attrString = `top:${top}px;left:${left}px;display:${visible.value ? "block" : "none"};`;
      warpperRef.value.setAttribute("style", attrString);

      nextTick(() => {
        visible.value = !visible.value;
        emit("update:popupVisible", visible.value);
      });
    };

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
          })}
          <Teleport to="body">
            <Transition name="fade-select" appear>
              <div ref={warpperRef} v-show={visible.value} class={`${name}-warpper`}>
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
