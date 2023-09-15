import { PropType, Teleport, Transition, defineComponent, h, ref } from "vue";
import { TriggerPosition } from "./types";
import { setPositionData } from "./core";

export default defineComponent({
  name: "Trigger",
  props: {
    /** 触发方式 */
    trigger: { type: String, default: "click" },
    /** 弹出位置 */
    position: { type: String as PropType<TriggerPosition>, default: "bottom" },
    /** 距离弹出位置的偏移量 */
    popupOffset: { type: Number, default: 0 },
    /** 是否显示箭头 */
    showArrow: { type: Boolean, default: false },
  },
  setup(props, { emit, slots }) {
    const name = "bp-trigger";

    const triggerRef = ref();
    const warpperRef = ref();
    const visible = ref<boolean>(false);
    const handleClick = () => {
      visible.value = !visible.value;

      const info = setPositionData(triggerRef.value.children[0], props.position, props.popupOffset);
      const { top, left, transform } = info;

      warpperRef.value &&
        warpperRef.value.setAttribute(
          "style",
          `top:${top}px;left:${left}px;transform:${transform}; display:${visible.value ? "block" : "none"}`
        );
    };

    const render = () => {
      const children = slots.default?.() || [];

      return (
        <div class={name} ref={triggerRef}>
          {h(children[0], {
            onClick: handleClick,
          })}
          <Teleport to="body">
            <Transition name="fade-select" appear>
              <div ref={warpperRef} v-show={visible.value} class={`${name}-warpper`}>
                <div class={`${name}-content`}>
                  <slot name="content"></slot>
                </div>
              </div>
            </Transition>
          </Teleport>
        </div>
      );
    };

    return render;
  },
});
