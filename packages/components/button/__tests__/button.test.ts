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

  it("Enter key does not double-fire click", async () => {
    const wrapper = mount(Button, {
      slots: { default: "Click me" },
    });
    await wrapper.find("button").trigger("keydown", { key: "Enter" });
    // Enter should NOT trigger click via onKeydown (native button handles it)
    expect(wrapper.emitted("click")).toBeFalsy();
  });

  it("Space key triggers click", async () => {
    const wrapper = mount(Button, {
      slots: { default: "Click me" },
    });
    await wrapper.find("button").trigger("keydown", { key: " " });
    expect(wrapper.emitted("click")).toBeTruthy();
  });

  it("disabled button does not emit click", async () => {
    const wrapper = mount(Button, {
      props: { disabled: true },
      slots: { default: "Disabled" },
    });
    await wrapper.find("button").trigger("click");
    expect(wrapper.emitted("click")).toBeFalsy();
  });
});
