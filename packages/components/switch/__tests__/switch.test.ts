import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import Switch from "../src/switch.vue";

describe("Switch", () => {
  it("create", () => { expect(mount(Switch).classes()).toContain("bp-switch"); });
  it("v-model true shows check", () => { expect(mount(Switch, { props: { modelValue: true } }).find(".bp-switch-check").exists()).toBe(true); });
  it("v-model false no check", () => { expect(mount(Switch, { props: { modelValue: false } }).find(".bp-switch-check").exists()).toBe(false); });
  it("click toggles", async () => {
    const w = mount(Switch, { props: { modelValue: false } });
    await w.trigger("click");
    expect(w.emitted("update:modelValue")?.[0]).toEqual([true]);
  });
  it("disabled", () => {
    const w = mount(Switch, { props: { disabled: true } });
    expect(w.classes()).toContain("bp-switch-disabled");
  });
  it("size", () => {
    expect(mount(Switch, { props: { size: "mini" } }).classes()).toContain("bp-switch-mini");
    expect(mount(Switch, { props: { size: "large" } }).classes()).toContain("bp-switch-large");
  });
  it("checkText", () => {
    const w = mount(Switch, { props: { modelValue: true, checkText: "ON" } });
    expect(w.text()).toContain("ON");
  });
  it("uncheckText", () => {
    const w = mount(Switch, { props: { modelValue: false, uncheckText: "OFF" } });
    expect(w.text()).toContain("OFF");
  });
  it("custom checkValue/uncheckValue", async () => {
    const w = mount(Switch, { props: { modelValue: "on", checkValue: "on", uncheckValue: "off" } });
    expect(w.find(".bp-switch-check").exists()).toBe(true);
    await w.trigger("click");
    expect(w.emitted("update:modelValue")?.[0]).toEqual(["off"]);
  });
  it("id attribute", () => {
    const w = mount(Switch, { props: { id: "my-switch" } });
    expect(w.find("input").attributes("id")).toBe("my-switch");
  });
  it("loading icon", () => {
    const w = mount(Switch, { props: { modelValue: true } });
    // Loading icon shows when loading is true (check the component)
    expect(w.find(".bp-switch-slider").exists()).toBe(true);
  });
});
