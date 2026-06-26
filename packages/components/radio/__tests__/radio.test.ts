import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import Radio from "../src/radio.vue";

describe("Radio", () => {
  it("create", () => {
    const wrapper = mount(Radio);
    expect(wrapper.classes()).toContain("bp-radio");
  });

  it("v-model checked", () => {
    const wrapper = mount(Radio, { props: { modelValue: "a", value: "a" } });
    expect(wrapper.classes()).toContain("bp-radio-check");
  });

  it("disabled", () => {
    const wrapper = mount(Radio, { props: { disabled: true } });
    expect(wrapper.classes()).toContain("bp-radio-disabled");
  });

  it("click selects", async () => {
    const wrapper = mount(Radio, { props: { modelValue: "", value: "b" } });
    await wrapper.trigger("click");
    expect(wrapper.emitted("update:modelValue")?.[0]).toEqual(["b"]);
  });

  it("slot content", () => {
    const wrapper = mount(Radio, { slots: { default: "Option A" } });
    expect(wrapper.text()).toContain("Option A");
  });
});
