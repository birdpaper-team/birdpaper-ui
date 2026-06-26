import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import Tooltip from "../src/tooltip.vue";

describe("Tooltip", () => {
  it("create", () => {
    const wrapper = mount(Tooltip, {
      props: { content: "Tooltip text" },
      slots: { default: "<button>Hover</button>" },
    });
    expect(wrapper.text()).toContain("Hover");
  });

  it("content prop", () => {
    const wrapper = mount(Tooltip, {
      props: { content: "Help text" },
      slots: { default: "<span>Info</span>" },
    });
    expect(wrapper.props("content")).toBe("Help text");
  });

  it("theme prop", () => {
    const wrapper = mount(Tooltip, {
      props: { content: "Tip", theme: "light" },
      slots: { default: "<span>Target</span>" },
    });
    expect(wrapper.props("theme")).toBe("light");
  });
});
