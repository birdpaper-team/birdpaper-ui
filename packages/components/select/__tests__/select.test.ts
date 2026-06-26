import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import Select from "../src/select.vue";

describe("Select", () => {
  it("create", () => {
    const wrapper = mount(Select);
    expect(wrapper.classes()).toContain("bp-select");
  });

  it("placeholder", () => {
    const wrapper = mount(Select, { props: { placeholder: "Pick one" } });
    expect(wrapper.find("input").attributes("placeholder")).toBe("Pick one");
  });

  it("disabled", () => {
    const wrapper = mount(Select, { props: { disabled: true } });
    expect(wrapper.find("input").attributes("disabled")).toBe("");
  });

  it("size", () => {
    const wrapper = mount(Select, { props: { size: "large" } });
    expect(wrapper.props("size")).toBe("large");
  });

  it("multiple mode initializes array", () => {
    const wrapper = mount(Select, { props: { multiple: true, modelValue: [] } });
    expect(Array.isArray(wrapper.props("modelValue"))).toBe(true);
  });
});
