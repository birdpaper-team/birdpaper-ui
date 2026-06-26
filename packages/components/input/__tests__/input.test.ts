import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import { nextTick } from "vue";
import Input from "../src/input.vue";

describe("Input", () => {
  it("create", () => {
    const wrapper = mount(Input);
    expect(wrapper.classes()).toContain("bp-input");
    expect(wrapper.find("input").exists()).toBe(true);
  });

  it("v-model", async () => {
    const wrapper = mount(Input, { props: { modelValue: "hello" } });
    expect(wrapper.find("input").element.value).toBe("hello");
    await wrapper.find("input").setValue("world");
    expect(wrapper.emitted("update:modelValue")?.[0]).toEqual(["world"]);
  });

  it("placeholder", () => {
    const wrapper = mount(Input, { props: { placeholder: "Enter text" } });
    expect(wrapper.find("input").attributes("placeholder")).toBe("Enter text");
  });

  it("size", () => {
    const wrapper = mount(Input, { props: { size: "large" } });
    expect(wrapper.classes()).toContain("bp-input-large");
  });

  it("disabled", () => {
    const wrapper = mount(Input, { props: { disabled: true } });
    expect(wrapper.classes()).toContain("bp-input-disabled");
    expect(wrapper.find("input").attributes("disabled")).toBe("");
  });

  it("readonly", () => {
    const wrapper = mount(Input, { props: { readonly: true } });
    expect(wrapper.find("input").attributes("readonly")).toBe("");
  });

  it("type password", () => {
    const wrapper = mount(Input, { props: { type: "password" } });
    expect(wrapper.find("input").attributes("type")).toBe("password");
  });

  it("clearable", async () => {
    const wrapper = mount(Input, { props: { clearable: true, modelValue: "text" } });
    expect(wrapper.find(".action-icon").exists()).toBe(true);
  });

  it("round", () => {
    const wrapper = mount(Input, { props: { isRound: true } });
    expect(wrapper.classes()).toContain("bp-input-round");
  });

  it("emits focus and blur", async () => {
    const wrapper = mount(Input);
    await wrapper.find("input").trigger("focus");
    expect(wrapper.emitted("focus")).toBeTruthy();
    await wrapper.find("input").trigger("blur");
    expect(wrapper.emitted("blur")).toBeTruthy();
  });

  it("emits input on typing", async () => {
    const wrapper = mount(Input);
    await wrapper.find("input").trigger("input");
    expect(wrapper.emitted("input")).toBeTruthy();
  });

  it("maxlength truncates", async () => {
    const wrapper = mount(Input, { props: { maxlength: 3 } });
    const input = wrapper.find("input");
    Object.defineProperty(input.element, "value", { value: "abcde", writable: true });
    await input.trigger("input");
    expect(wrapper.emitted("update:modelValue")?.[0]).toEqual(["abc"]);
  });
});
