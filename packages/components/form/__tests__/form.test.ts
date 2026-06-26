import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import Form from "../src/form.vue";
import FormItem from "../src/components/form-item.vue";
import { h } from "vue";

describe("Form", () => {
  it("create", () => {
    const wrapper = mount(Form, {
      props: { model: {} },
      slots: { default: () => h(FormItem, { field: "name", label: "Name" }) },
    });
    expect(wrapper.classes()).toContain("bp-form");
  });

  it("layout", () => {
    const wrapper = mount(Form, { props: { model: {}, layout: "vertical" } });
    expect(wrapper.classes()).toContain("bp-form-vertical");
  });

  it("labelWidth", () => {
    const wrapper = mount(Form, {
      props: { model: {}, labelWidth: "100px" },
    });
    expect(wrapper.props("labelWidth")).toBe("100px");
  });

  it("labelPosition", () => {
    const wrapper = mount(Form, {
      props: { model: {}, labelPosition: "right" },
    });
    expect(wrapper.props("labelPosition")).toBe("right");
  });

  it("expose validate", () => {
    const wrapper = mount(Form, { props: { model: {} } });
    expect(typeof wrapper.vm.validate).toBe("function");
    expect(typeof wrapper.vm.clearValidate).toBe("function");
    expect(typeof wrapper.vm.resetFields).toBe("function");
  });
});

describe("FormItem", () => {
  it("create", () => {
    const wrapper = mount(FormItem, { props: { label: "Username" } });
    expect(wrapper.classes()).toContain("bp-form-item");
    expect(wrapper.text()).toContain("Username");
  });

  it("required", () => {
    const wrapper = mount(FormItem, { props: { label: "Name", required: true } });
    expect(wrapper.find(".bp-form-item-label-required-symbol").exists()).toBe(true);
  });

  it("slot content", () => {
    const wrapper = mount(FormItem, {
      props: { label: "Email" },
      slots: { default: "<input />" },
    });
    expect(wrapper.find("input").exists()).toBe(true);
  });
});
