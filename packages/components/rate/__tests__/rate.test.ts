import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import Rate from "../src/rate.vue";

describe("Rate", () => {
  it("create", () => {
    const wrapper = mount(Rate);
    expect(wrapper.classes()).toContain("bp-rate");
  });

  it("modelValue", () => {
    const wrapper = mount(Rate, { props: { modelValue: 3 } });
    expect(wrapper.props("modelValue")).toBe(3);
  });

  it("count", () => {
    const wrapper = mount(Rate, { props: { count: 10 } });
    expect(wrapper.props("count")).toBe(10);
  });

  it("disabled", () => {
    const wrapper = mount(Rate, { props: { disabled: true } });
    expect(wrapper.props("disabled")).toBe(true);
  });
});
