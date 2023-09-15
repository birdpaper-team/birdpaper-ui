import { Teleport, Transition, defineComponent, h, ref } from "vue";

export default defineComponent({
  name: "Trigger",
  props: {
    trigger: { type: String, default: "click" },
  },
  setup(props, { emit, slots }) {
    const name = "bp-trigger";

    const triggerRef = ref();
    const warpperRef = ref();
    const visible = ref<boolean>(false);
    const handleClick = () => {
      visible.value = !visible.value;

      const slotContent = triggerRef.value.children[0];
      const rect = slotContent?.getBoundingClientRect();
      if (!rect) return;

      const top = rect.top + rect.height + document.documentElement.scrollTop + 10;
      warpperRef.value &&
        warpperRef.value.setAttribute(
          "style",
          `top:${top}px;left:${rect.left}px;display:${visible.value ? "block" : "none"}`
        );
    };

    const render = () => {
      const child = slots.default?.() || [];

      return (
        <div class={name} ref={triggerRef}>
          {h(child[0], {
            onClick: handleClick,
          })}
          <Teleport to="body">
            <Transition name="fade-select" appear>
              <div ref={warpperRef} v-show={visible.value} class={`${name}-warpper`}>
                <div class={`${name}-content`}></div>
              </div>
            </Transition>
          </Teleport>
        </div>
      );
    };

    return render;
  },
});
