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
    expect(wrapper.find("textarea").attributes("disabled")).toBe("");
  });

  it("readonly", () => {
    const wrapper = mount(Textarea, { props: { readonly: true } });
    expect(wrapper.find("textarea").attributes("readonly")).toBe("");
  });

  it("size", () => {
    expect(mount(Textarea, { props: { size: "mini" } }).classes()).toContain("bp-textarea-mini");
    expect(mount(Textarea, { props: { size: "small" } }).classes()).toContain("bp-textarea-small");
    expect(mount(Textarea, { props: { size: "large" } }).classes()).toContain("bp-textarea-large");
  });

  it("emits focus", async () => {
    const wrapper = mount(Textarea);
    await wrapper.find("textarea").trigger("focus");
    expect(wrapper.emitted("focus")).toBeTruthy();
  });

  it("emits blur", async () => {
    const wrapper = mount(Textarea);
    await wrapper.find("textarea").trigger("blur");
    expect(wrapper.emitted("blur")).toBeTruthy();
  });

  it("emits input", async () => {
    const wrapper = mount(Textarea);
    await wrapper.find("textarea").trigger("input");
    expect(wrapper.emitted("input")).toBeTruthy();
  });

  it("emits keypress", async () => {
    const wrapper = mount(Textarea);
    await wrapper.find("textarea").trigger("keypress");
    expect(wrapper.emitted("keypress")).toBeTruthy();
  });

  it("emits keyup", async () => {
    const wrapper = mount(Textarea);
    await wrapper.find("textarea").trigger("keyup");
    expect(wrapper.emitted("keyup")).toBeTruthy();
  });

  it("clearable shows icon", () => {
    const wrapper = mount(Textarea, { props: { clearable: true, modelValue: "text" } });
    expect(wrapper.find(".action-icon").exists()).toBe(true);
  });

  it("clearable hidden when empty", () => {
    const wrapper = mount(Textarea, { props: { clearable: true, modelValue: "" } });
    expect(wrapper.find(".action-icon").exists()).toBe(false);
  });

  it("maxlength truncates", async () => {
    const wrapper = mount(Textarea, { props: { maxlength: 5 } });
    const ta = wrapper.find("textarea");
    Object.defineProperty(ta.element, "value", { value: "abcdefgh", writable: true });
    await ta.trigger("input");
    expect(wrapper.emitted("update:modelValue")?.[0]).toEqual(["abcde"]);
  });

  it("showLimit displays count", () => {
    const wrapper = mount(Textarea, { props: { showLimit: true, modelValue: "abc" } });
    expect(wrapper.text()).toContain("3");
  });

  it("showLimit with maxlength", () => {
    const wrapper = mount(Textarea, { props: { showLimit: true, maxlength: 100, modelValue: "abc" } });
    expect(wrapper.text()).toContain("3/100");
  });

  it("wordCountMode chinese-english", () => {
    const wrapper = mount(Textarea, { props: { showLimit: true, wordCountMode: "chinese-english", modelValue: "你好ab" } });
    expect(wrapper.text()).toContain("中2英2");
  });

  it("suffix slot", () => {
    const wrapper = mount(Textarea, { slots: { suffix: "<span>SFX</span>" } });
    expect(wrapper.text()).toContain("SFX");
  });

  it("expose focus", () => { expect(typeof mount(Textarea).vm.focus).toBe("function"); });
  it("expose blur", () => { expect(typeof mount(Textarea).vm.blur).toBe("function"); });
  it("expose clear", () => { expect(typeof mount(Textarea).vm.clear).toBe("function"); });

  it("disabled prevents clear", async () => {
    const wrapper = mount(Textarea, { props: { clearable: true, disabled: true, modelValue: "text" } });
    const icon = wrapper.find(".action-icon");
    if (icon.exists()) { await icon.trigger("click"); }
    expect(wrapper.find("textarea").element.value).toBe("text");
  });

  it("readonly prevents clear on click", async () => {
    const wrapper = mount(Textarea, { props: { clearable: true, readonly: true, modelValue: "text" } });
    const icon = wrapper.find(".action-icon");
    if (icon.exists()) {
      await icon.trigger("click");
      // readonly prevents clearing - value stays
      expect(wrapper.find("textarea").element.value).toBe("text");
    }
  });
});
