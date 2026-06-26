import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import Drawer from "../src/drawer.vue";

describe("Drawer", () => {
  it("props modelValue true", () => {
    const w = mount(Drawer, { props: { modelValue: true, title: "Drawer" } });
    expect(w.props("modelValue")).toBe(true);
    expect(w.props("title")).toBe("Drawer");
  });
  it("props modelValue false", () => {
    const w = mount(Drawer, { props: { modelValue: false } });
    expect(w.props("modelValue")).toBe(false);
  });
  it("title", () => { expect(mount(Drawer, { props: { modelValue: true, title: "My Drawer" } }).props("title")).toBe("My Drawer"); });
  it("placement", () => {
    expect(mount(Drawer, { props: { modelValue: true, placement: "left" } }).props("placement")).toBe("left");
    expect(mount(Drawer, { props: { modelValue: true, placement: "up" } }).props("placement")).toBe("up");
    expect(mount(Drawer, { props: { modelValue: true, placement: "down" } }).props("placement")).toBe("down");
  });
  it("width", () => { expect(mount(Drawer, { props: { modelValue: true, width: "500px" } }).props("width")).toBe("500px"); });
  it("height", () => { expect(mount(Drawer, { props: { modelValue: true, height: "400px" } }).props("height")).toBe("400px"); });
  it("okText/cancelText", () => {
    const w = mount(Drawer, { props: { modelValue: true, okText: "Save", cancelText: "Close" } });
    expect(w.props("okText")).toBe("Save");
    expect(w.props("cancelText")).toBe("Close");
  });
  it("hideFooter", () => { expect(mount(Drawer, { props: { modelValue: true, hideFooter: true } }).props("hideFooter")).toBe(true); });
  it("hideClose", () => { expect(mount(Drawer, { props: { modelValue: true, hideClose: true } }).props("hideClose")).toBe(true); });
  it("border", () => { expect(mount(Drawer, { props: { modelValue: true, border: true } }).props("border")).toBe(true); });
  it("maskClosable", () => { expect(mount(Drawer, { props: { modelValue: true, maskClosable: false } }).props("maskClosable")).toBe(false); });
});
