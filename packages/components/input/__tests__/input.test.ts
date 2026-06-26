import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
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
    expect(mount(Input, { props: { placeholder: "Enter" } }).find("input").attributes("placeholder")).toBe("Enter");
  });

  it("size classes", () => {
    expect(mount(Input, { props: { size: "mini" } }).classes()).toContain("bp-input-mini");
    expect(mount(Input, { props: { size: "small" } }).classes()).toContain("bp-input-small");
    expect(mount(Input, { props: { size: "large" } }).classes()).toContain("bp-input-large");
  });

  it("disabled", () => {
    const wrapper = mount(Input, { props: { disabled: true } });
    expect(wrapper.classes()).toContain("bp-input-disabled");
    expect(wrapper.find("input").attributes("disabled")).toBe("");
  });

  it("readonly", () => {
    expect(mount(Input, { props: { readonly: true } }).find("input").attributes("readonly")).toBe("");
  });

  it("type password", () => {
    expect(mount(Input, { props: { type: "password" } }).find("input").attributes("type")).toBe("password");
  });

  it("password eye icon visible", () => {
    const wrapper = mount(Input, { props: { type: "password", showPassword: true, modelValue: "secret" } });
    expect(wrapper.find(".action-icon").exists()).toBe(true);
  });

  it("clearable shows icon", () => {
    expect(mount(Input, { props: { clearable: true, modelValue: "x" } }).find(".action-icon").exists()).toBe(true);
  });

  it("clearable hidden when empty", () => {
    expect(mount(Input, { props: { clearable: true, modelValue: "" } }).find(".action-icon").exists()).toBe(false);
  });

  it("round", () => {
    expect(mount(Input, { props: { isRound: true } }).classes()).toContain("bp-input-round");
  });

  it("emits focus/blur/keypress/keyup", async () => {
    const wrapper = mount(Input);
    await wrapper.find("input").trigger("focus"); expect(wrapper.emitted("focus")).toBeTruthy();
    await wrapper.find("input").trigger("blur"); expect(wrapper.emitted("blur")).toBeTruthy();
    await wrapper.find("input").trigger("keypress"); expect(wrapper.emitted("keypress")).toBeTruthy();
    await wrapper.find("input").trigger("keyup"); expect(wrapper.emitted("keyup")).toBeTruthy();
  });

  it("maxlength truncates", async () => {
    const wrapper = mount(Input, { props: { maxlength: 3 } });
    const inp = wrapper.find("input");
    Object.defineProperty(inp.element, "value", { value: "abcde", writable: true });
    await inp.trigger("input");
    expect(wrapper.emitted("update:modelValue")?.[0]).toEqual(["abc"]);
  });

  it("maxlength chinese-english mode", async () => {
    const wrapper = mount(Input, { props: { maxlength: 2, wordCountMode: "chinese-english" } });
    const inp = wrapper.find("input");
    Object.defineProperty(inp.element, "value", { value: "你好世ab", writable: true });
    await inp.trigger("input");
    expect(wrapper.emitted("update:modelValue")?.[0]?.[0]).toBe("你好");
  });

  it("showLimit displays count", () => {
    expect(mount(Input, { props: { showLimit: true, modelValue: "abc" } }).text()).toContain("3");
  });

  it("showLimit with maxlength", () => {
    expect(mount(Input, { props: { showLimit: true, maxlength: 50, modelValue: "abc" } }).text()).toContain("3/50");
  });

  it("wordCountMode chinese-english display", () => {
    const wrapper = mount(Input, { props: { showLimit: true, wordCountMode: "chinese-english", modelValue: "你好ab" } });
    expect(wrapper.text()).toContain("中2英2");
  });

  it("wordCountMode chinese-english display with maxlength", () => {
    const wrapper = mount(Input, { props: { showLimit: true, wordCountMode: "chinese-english", maxlength: 10, modelValue: "你好" } });
    expect(wrapper.text()).toContain("中2英0/10");
  });

  it("prefix slot", () => { expect(mount(Input, { slots: { prefix: "<span>PFX</span>" } }).text()).toContain("PFX"); });
  it("suffix slot", () => { expect(mount(Input, { slots: { suffix: "<span>SFX</span>" } }).text()).toContain("SFX"); });
  it("id/name", () => {
    const wrapper = mount(Input, { props: { id: "my-input", name: "username" } });
    expect(wrapper.find("input").attributes("id")).toBe("my-input");
    expect(wrapper.find("input").attributes("name")).toBe("username");
  });

  it("expose focus/blur/triggerEye/clear", () => {
    const w = mount(Input, { props: { type: "password", showPassword: true } });
    expect(typeof w.vm.focus).toBe("function");
    expect(typeof w.vm.blur).toBe("function");
    expect(typeof w.vm.triggerEye).toBe("function");
    expect(typeof w.vm.clear).toBe("function");
  });

  it("readonly hides clear icon", () => {
    expect(mount(Input, { props: { clearable: true, readonly: true, modelValue: "x" } }).find(".action-icon").exists()).toBe(false);
  });
});
