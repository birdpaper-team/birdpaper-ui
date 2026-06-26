import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import DatePicker from "../src/date-picker.vue";

describe("DatePicker", () => {
  it("create", () => {
    const wrapper = mount(DatePicker);
    expect(wrapper.exists()).toBe(true);
  });

  it("placeholder", () => {
    const wrapper = mount(DatePicker, { props: { placeholder: "Select date" } });
    expect(wrapper.props("placeholder")).toBe("Select date");
  });

  it("disabled", () => {
    const wrapper = mount(DatePicker, { props: { disabled: true } });
    expect(wrapper.props("disabled")).toBe(true);
  });

  it("size", () => {
    const wrapper = mount(DatePicker, { props: { size: "large" } });
    expect(wrapper.props("size")).toBe("large");
  });
});
