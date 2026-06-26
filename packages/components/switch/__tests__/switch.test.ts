import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import Switch from "../src/switch.vue";

describe("Switch", () => {
  it("create", () => {
    const wrapper = mount(Switch);
    expect(wrapper.classes()).toContain("bp-switch");
  });

  it("v-model true", () => {
    const wrapper = mount(Switch, { props: { modelValue: true } });
    expect(wrapper.find(".bp-switch-check").exists()).toBe(true);
  });

  it("v-model false", () => {
    const wrapper = mount(Switch, { props: { modelValue: false } });
    expect(wrapper.find(".bp-switch-check").exists()).toBe(false);
  });

  it("disabled", async () => {
    const wrapper = mount(Switch, { props: { disabled: true } });
    expect(wrapper.classes()).toContain("bp-switch-disabled");
  });

  it("size", () => {
    const wrapper = mount(Switch, { props: { size: "large" } });
    expect(wrapper.classes()).toContain("bp-switch-large");
  });
});
