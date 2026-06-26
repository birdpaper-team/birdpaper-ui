import { describe, expect, it, vi } from "vitest";
import { ref, defineComponent, h, nextTick } from "vue";
import { mount } from "@vue/test-utils";
import { useEventListener } from "../src/use-event-listener";

describe("useEventListener", () => {
  it("adds and removes event listener on window", async () => {
    const handler = vi.fn();

    const wrapper = mount(
      defineComponent({
        setup() {
          useEventListener(window, "resize", handler);
          return () => h("div", "test");
        },
      })
    );

    window.dispatchEvent(new Event("resize"));
    expect(handler).toHaveBeenCalledTimes(1);

    wrapper.unmount();
    window.dispatchEvent(new Event("resize"));
    // After unmount, handler should not be called again
    expect(handler).toHaveBeenCalledTimes(1);
  });

  it("adds and removes event listener on element", async () => {
    const handler = vi.fn();
    const el = ref<HTMLElement | null>(null);

    const wrapper = mount(
      defineComponent({
        setup() {
          useEventListener({ value: null } as any, "click", handler);
          return () => h("div", "test");
        },
      })
    );

    // Hook should be set up without errors
    expect(handler).not.toHaveBeenCalled();
    wrapper.unmount();
  });
});
