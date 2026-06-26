import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import Trigger from "../src/trigger";

describe("Trigger", () => {
  it("create", () => {
    const wrapper = mount(Trigger, {
      props: { modelValue: false },
      slots: {
        default: "<button>Trigger</button>",
        content: "<div>Popup</div>",
      },
    });
    expect(wrapper.classes()).toContain("bp-trigger");
  });

  it("trigger click", () => {
    const wrapper = mount(Trigger, {
      props: { modelValue: false, trigger: "click" },
      slots: {
        default: "<button>Click me</button>",
        content: "<div>Content</div>",
      },
    });
    expect(wrapper.props("trigger")).toBe("click");
  });

  it("trigger hover", () => {
    const wrapper = mount(Trigger, {
      props: { modelValue: false, trigger: "hover" },
      slots: {
        default: "<span>Hover</span>",
        content: "<div>Tip</div>",
      },
    });
    expect(wrapper.props("trigger")).toBe("hover");
  });

  it("position", () => {
    const wrapper = mount(Trigger, {
      props: { modelValue: false, position: "top" },
      slots: {
        default: "<span>Target</span>",
        content: "<div>Popup</div>",
      },
    });
    expect(wrapper.props("position")).toBe("top");
  });

  it("disabled", () => {
    const wrapper = mount(Trigger, {
      props: { modelValue: false, disabled: true },
      slots: {
        default: "<span>Disabled</span>",
        content: "<div>Popup</div>",
      },
    });
    expect(wrapper.props("disabled")).toBe(true);
  });
});
