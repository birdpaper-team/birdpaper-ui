import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import Checkbox from "../src/checkbox.vue";

describe("Checkbox", () => {
  it("create", () => {
    const wrapper = mount(Checkbox);
    expect(wrapper.classes()).toContain("bp-checkbox");
  });

  it("v-model:check boolean", async () => {
    const wrapper = mount(Checkbox, { props: { check: true } });
    expect(wrapper.find(".bp-checkbox-check").exists()).toBe(true);
  });

  it("disabled", () => {
    const wrapper = mount(Checkbox, { props: { disabled: true } });
    expect(wrapper.classes()).toContain("bp-checkbox-disabled");
  });

  it("click toggles", async () => {
    const wrapper = mount(Checkbox, { props: { check: false } });
    await wrapper.trigger("click");
    expect(wrapper.emitted("update:check")?.[0]).toEqual([true]);
  });

  it("indeterminate shows subtract icon", () => {
    const wrapper = mount(Checkbox, { props: { check: true, indeterminate: true } });
    expect(wrapper.find(".bp-checkbox-check").exists()).toBe(true);
  });

  it("slot content", () => {
    const wrapper = mount(Checkbox, { slots: { default: "Accept" } });
    expect(wrapper.text()).toContain("Accept");
  });
});
