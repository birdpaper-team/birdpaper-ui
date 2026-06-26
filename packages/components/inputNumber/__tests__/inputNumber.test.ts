import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import InputNumber from "../src/inputNumber.vue";

describe("InputNumber", () => {
  it("create", () => {
    const wrapper = mount(InputNumber);
    expect(wrapper.classes()).toContain("bp-input-number");
  });

  it("v-model", async () => {
    const wrapper = mount(InputNumber, { props: { modelValue: 5 } });
    expect(wrapper.props("modelValue")).toBe(5);
  });

  it("min and max", () => {
    const wrapper = mount(InputNumber, { props: { min: 0, max: 100 } });
    expect(wrapper.props("min")).toBe(0);
    expect(wrapper.props("max")).toBe(100);
  });

  it("step", () => {
    const wrapper = mount(InputNumber, { props: { step: 2 } });
    expect(wrapper.props("step")).toBe(2);
  });

  it("disabled", () => {
    const wrapper = mount(InputNumber, { props: { disabled: true } });
    expect(wrapper.props("disabled")).toBe(true);
  });

  it("size", () => {
    const wrapper = mount(InputNumber, { props: { size: "large" } });
    expect(wrapper.props("size")).toBe("large");
  });
});
