import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import CheckboxGroup from "../src/checkboxGroup";
import Checkbox from "../src/checkbox.vue";
import { h } from "vue";

const createGroup = (props = {}, checkboxProps: Record<string, any>[] = []) => {
  const checkboxes = checkboxProps.length
    ? checkboxProps.map((p, i) => h(Checkbox, { value: `opt${i}`, ...p }))
    : [h(Checkbox, { value: "a" }), h(Checkbox, { value: "b" }), h(Checkbox, { value: "c" })];

  return mount(CheckboxGroup, {
    props: { modelValue: [], ...props },
    slots: { default: () => checkboxes },
  });
};

describe("CheckboxGroup", () => {
  it("create", () => {
    const wrapper = createGroup();
    expect(wrapper.classes()).toContain("bp-checkbox-group");
  });

  it("classes are valid strings, not [object Object]", () => {
    const wrapper = createGroup();
    wrapper.classes().forEach((cls) => {
      expect(typeof cls).toBe("string");
      expect(cls).not.toContain("[object");
    });
  });

  it("default direction is horizontal", () => {
    const wrapper = createGroup();
    expect(wrapper.classes()).toContain("bp-checkbox-group-horizontal");
  });

  it("direction vertical", () => {
    const wrapper = createGroup({ direction: "vertical" });
    expect(wrapper.classes()).toContain("bp-checkbox-group-vertical");
  });

  it("renders child checkbox components", () => {
    const wrapper = createGroup();
    const checkboxes = wrapper.findAllComponents(Checkbox);
    expect(checkboxes.length).toBe(3);
  });

  it("filters out non-Checkbox children", () => {
    const wrapper = mount(CheckboxGroup, {
      props: { modelValue: [] },
      slots: {
        default: () => [
          h(Checkbox, { value: "a" }),
          h("div", { class: "not-a-checkbox" }, "ignored"),
          h(Checkbox, { value: "b" }),
        ],
      },
    });
    const checkboxes = wrapper.findAllComponents(Checkbox);
    expect(checkboxes.length).toBe(2);
  });

  it("passes disabled to children", () => {
    const wrapper = createGroup({ disabled: true });
    const checkboxes = wrapper.findAllComponents(Checkbox);
    checkboxes.forEach((c) => {
      expect(c.props("disabled")).toBe(true);
    });
  });

  it("passes modelValue to children", () => {
    const wrapper = createGroup({ modelValue: ["opt0", "opt2"] });
    const checkboxes = wrapper.findAllComponents(Checkbox);
    checkboxes.forEach((c) => {
      expect(c.props("modelValue")).toEqual(["opt0", "opt2"]);
    });
  });

  it("emits change when child is clicked", async () => {
    const wrapper = createGroup({ modelValue: [] });
    const checkbox = wrapper.findAllComponents(Checkbox)[0];
    await checkbox.find("div").trigger("click");
    expect(wrapper.emitted("change")).toBeTruthy();
  });
});
