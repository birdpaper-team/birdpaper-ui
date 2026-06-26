import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import TimePicker from "../src/timePicker.vue";

describe("TimePicker", () => {
  it("create", () => {
    const wrapper = mount(TimePicker);
    expect(wrapper.classes()).toContain("bp-timePicker");
  });

  it("placeholder", () => {
    const wrapper = mount(TimePicker, { props: { placeholder: "Select time" } });
    expect(wrapper.props("placeholder")).toBe("Select time");
  });

  it("disabled", () => {
    const wrapper = mount(TimePicker, { props: { disabled: true } });
    expect(wrapper.props("disabled")).toBe(true);
  });

  it("size", () => {
    const wrapper = mount(TimePicker, { props: { size: "small" } });
    expect(wrapper.props("size")).toBe("small");
  });
});
