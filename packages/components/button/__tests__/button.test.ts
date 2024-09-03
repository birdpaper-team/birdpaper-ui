import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import Button from "../src/button.vue";

describe("Button", () => {
  it("create", () => {
    const TEXT = "The Button.";

    const wrapper = mount(Button, {
      slots: { default: TEXT },
    });

    expect(wrapper.text()).toBe(TEXT);
    expect(wrapper.classes()).toContain("bp-button");
  });

  it("attrType", () => {
    const wrapper = mount(Button, {
      props: { attrType: "submit" },
    });

    expect(wrapper.attributes("type")).toBe("submit");
  });

  it("loading", () => {
    const wrapper = mount(Button, {
      props: {
        loading: true,
      },
      slots: { default: "loading..." },
    });

    expect(wrapper.find(".bp-icon-loading").exists()).toBe(true);
  });
});
