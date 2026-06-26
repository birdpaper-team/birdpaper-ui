import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import RadioGroup from "../src/radioGroup";
import Radio from "../src/radio.vue";
import { h } from "vue";

const createGroup = (props = {}, radioProps: Record<string, any>[] = []) => {
  const radios = radioProps.length
    ? radioProps.map((p, i) => h(Radio, { value: `opt${i}`, ...p }))
    : [h(Radio, { value: "a" }), h(Radio, { value: "b" }), h(Radio, { value: "c" })];

  return mount(RadioGroup, {
    props: { modelValue: "", ...props },
    slots: { default: () => radios },
  });
};

describe("RadioGroup", () => {
  it("create", () => {
    const wrapper = createGroup();
    expect(wrapper.classes()).toContain("bp-radio-group");
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
    expect(wrapper.classes()).toContain("bp-radio-group-horizontal");
  });

  it("direction vertical", () => {
    const wrapper = createGroup({ direction: "vertical" });
    expect(wrapper.classes()).toContain("bp-radio-group-vertical");
  });

  it("type button adds button class", () => {
    const wrapper = createGroup({ type: "button" });
    expect(wrapper.classes()).toContain("bp-radio-group-button");
  });

  it("type button with size", () => {
    const wrapper = createGroup({ type: "button", size: "small" });
    expect(wrapper.classes()).toContain("bp-radio-group-small");
  });

  it("type button with large size", () => {
    const wrapper = createGroup({ type: "button", size: "large" });
    expect(wrapper.classes()).toContain("bp-radio-group-large");
  });

  it("renders child radio components", () => {
    const wrapper = createGroup();
    const radios = wrapper.findAllComponents(Radio);
    expect(radios.length).toBe(3);
  });

  it("filters out non-Radio children", () => {
    const wrapper = mount(RadioGroup, {
      props: { modelValue: "" },
      slots: {
        default: () => [
          h(Radio, { value: "a" }),
          h("div", { class: "not-a-radio" }, "ignored"),
          h(Radio, { value: "b" }),
        ],
      },
    });
    const radios = wrapper.findAllComponents(Radio);
    expect(radios.length).toBe(2);
  });

  it("passes disabled to children", () => {
    const wrapper = createGroup({ disabled: true });
    const radios = wrapper.findAllComponents(Radio);
    radios.forEach((r) => {
      expect(r.props("disabled")).toBe(true);
    });
  });

  it("passes modelValue to children", () => {
    const wrapper = createGroup({ modelValue: "opt1" });
    const radios = wrapper.findAllComponents(Radio);
    radios.forEach((r) => {
      expect(r.props("modelValue")).toBe("opt1");
    });
  });

  it("emits change when child is clicked", async () => {
    const wrapper = createGroup({ modelValue: "" });
    const radio = wrapper.findAllComponents(Radio)[1];
    await radio.find("label").trigger("click");
    expect(wrapper.emitted("change")).toBeTruthy();
  });
});
