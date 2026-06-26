import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import { nextTick, h } from "vue";
import Form from "../src/form.vue";
import FormItem from "../src/components/form-item.vue";

describe("Form", () => {
  const createForm = (props: any = {}) => {
    return mount(Form, {
      props: { model: { name: "", email: "" }, ...props },
      slots: {
        default: () =>
          h(FormItem, { field: "name", label: "Name" }, () =>
            h("input", { "data-testid": "name-input" })
          ),
      },
    });
  };

  it("create", () => {
    const wrapper = createForm();
    expect(wrapper.classes()).toContain("bp-form");
  });

  it("layout horizontal", () => {
    const wrapper = createForm({ layout: "horizontal" });
    expect(wrapper.classes()).toContain("bp-form-horizontal");
  });

  it("layout vertical", () => {
    const wrapper = createForm({ layout: "vertical" });
    expect(wrapper.classes()).toContain("bp-form-vertical");
  });

  it("labelWidth", () => {
    const wrapper = createForm({ labelWidth: "120px" });
    expect(wrapper.props("labelWidth")).toBe("120px");
  });

  it("labelPosition right", () => {
    const wrapper = createForm({ labelPosition: "right" });
    expect(wrapper.props("labelPosition")).toBe("right");
  });

  it("expose validate", async () => {
    const wrapper = createForm();
    expect(typeof wrapper.vm.validate).toBe("function");
    const result = await wrapper.vm.validate();
    expect(result).toBe(true);
  });

  it("expose clearValidate", () => {
    const wrapper = createForm();
    expect(typeof wrapper.vm.clearValidate).toBe("function");
    wrapper.vm.clearValidate();
  });

  it("expose resetFields", () => {
    const wrapper = createForm();
    expect(typeof wrapper.vm.resetFields).toBe("function");
  });

  it("resetFields restores initial values", async () => {
    const model = { name: "initial", email: "" };
    const wrapper = mount(Form, {
      props: { model },
      slots: {
        default: () =>
          h(FormItem, { field: "name", label: "Name" }, () => h("input")),
      },
    });
    await nextTick();
    model.name = "changed";
    wrapper.vm.resetFields();
    expect(model.name).toBe("initial");
  });

  it("validate with rules fails", async () => {
    const model = { name: "" };
    const rules = { name: [{ required: true, message: "Name required" }] };
    const wrapper = mount(Form, {
      props: { model, rules },
      slots: {
        default: () =>
          h(FormItem, { field: "name", label: "Name", required: true }, () =>
            h("input")
          ),
      },
    });
    await nextTick();
    const result = await wrapper.vm.validate();
    expect(result).toBe(false);
  });

  it("submit event", async () => {
    const wrapper = createForm();
    await wrapper.find("form").trigger("submit");
    expect(wrapper.emitted("submit")).toBeTruthy();
  });
});

describe("FormItem", () => {
  it("create", () => {
    const wrapper = mount(FormItem, { props: { label: "Username" } });
    expect(wrapper.classes()).toContain("bp-form-item");
    expect(wrapper.text()).toContain("Username");
  });

  it("required shows asterisk", () => {
    const wrapper = mount(FormItem, { props: { label: "Name", required: true } });
    expect(wrapper.find(".bp-form-item-label-required-symbol").exists()).toBe(true);
  });

  it("showColon", () => {
    const wrapper = mount(FormItem, { props: { label: "Name", showColon: true } });
    expect(wrapper.text()).toContain(":");
  });

  it("width style px", () => {
    const wrapper = mount(FormItem, { props: { label: "Name", width: "200px" } });
    const label = wrapper.find(".bp-form-item-label");
    expect(label.attributes("style")).toContain("200px");
  });

  it("width style number", () => {
    const wrapper = mount(FormItem, { props: { label: "Name", width: 150 } });
    const label = wrapper.find(".bp-form-item-label");
    expect(label.attributes("style")).toContain("150px");
  });

  it("slot content renders", () => {
    const wrapper = mount(FormItem, {
      props: { label: "Email" },
      slots: { default: "<input data-testid='email' />" },
    });
    expect(wrapper.find("[data-testid='email']").exists()).toBe(true);
  });

  it("labelPosition class from parent form", () => {
    const wrapper = mount(Form, {
      props: { model: {}, labelPosition: "top" },
      slots: {
        default: () => h(FormItem, { field: "x", label: "X" }),
      },
    });
    expect(wrapper.find(".bp-form-item-label-top").exists()).toBe(true);
  });

  it("autoValidate on focusout", async () => {
    const model = { name: "" };
    const rules = { name: [{ required: true, message: "Required" }] };
    const wrapper = mount(Form, {
      props: { model, rules },
      slots: {
        default: () =>
          h(FormItem, { field: "name", label: "Name", autoValidate: true }, () =>
            h("input")
          ),
      },
    });
    await nextTick();
    await wrapper.find(".bp-form-item-content-inner").trigger("focusout");
    await nextTick();
  });
});
