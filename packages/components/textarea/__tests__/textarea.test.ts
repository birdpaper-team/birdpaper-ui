import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import Textarea from "../src/textarea.vue";

describe("Textarea", () => {
  it("create", () => {
    const wrapper = mount(Textarea);
    expect(wrapper.classes()).toContain("bp-textarea");
    expect(wrapper.find("textarea").exists()).toBe(true);
  });

  it("v-model", async () => {
    const wrapper = mount(Textarea, { props: { modelValue: "hello" } });
    expect(wrapper.find("textarea").element.value).toBe("hello");
    await wrapper.find("textarea").setValue("world");
    expect(wrapper.emitted("update:modelValue")?.[0]).toEqual(["world"]);
  });

  it("placeholder", () => {
    const wrapper = mount(Textarea, { props: { placeholder: "Type here" } });
    expect(wrapper.find("textarea").attributes("placeholder")).toBe("Type here");
  });

  it("rows", () => {
    const wrapper = mount(Textarea, { props: { rows: 5 } });
    expect(wrapper.find("textarea").attributes("rows")).toBe("5");
  });

  it("disabled", () => {
    const wrapper = mount(Textarea, { props: { disabled: true } });
    expect(wrapper.classes()).toContain("bp-textarea-disabled");
  });

  it("readonly", () => {
    const wrapper = mount(Textarea, { props: { readonly: true } });
    expect(wrapper.find("textarea").attributes("readonly")).toBe("");
  });

  it("size", () => {
    const wrapper = mount(Textarea, { props: { size: "large" } });
    expect(wrapper.classes()).toContain("bp-textarea-large");
  });
});
