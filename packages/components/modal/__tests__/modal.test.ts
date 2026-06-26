import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import Modal from "../src/modal.vue";

describe("Modal", () => {
  it("props modelValue true", () => { expect(mount(Modal, { props: { modelValue: true, title: "T" } }).props("modelValue")).toBe(true); });
  it("props modelValue false", () => { expect(mount(Modal, { props: { modelValue: false } }).props("modelValue")).toBe(false); });
  it("title", () => { expect(mount(Modal, { props: { modelValue: true, title: "My Modal" } }).props("title")).toBe("My Modal"); });
  it("content", () => { expect(mount(Modal, { props: { modelValue: true, content: "Body" } }).props("content")).toBe("Body"); });
  it("width string", () => { expect(mount(Modal, { props: { modelValue: true, width: "600px" } }).props("width")).toBe("600px"); });
  it("width number", () => { expect(mount(Modal, { props: { modelValue: true, width: 800 } }).props("width")).toBe(800); });
  it("fullscreen", () => { expect(mount(Modal, { props: { modelValue: true, fullscreen: true } }).props("fullscreen")).toBe(true); });
  it("center", () => { expect(mount(Modal, { props: { modelValue: true, center: true } }).props("center")).toBe(true); });
  it("showBorder", () => { expect(mount(Modal, { props: { modelValue: true, showBorder: false } }).props("showBorder")).toBe(false); });
  it("okText/cancelText", () => {
    const w = mount(Modal, { props: { modelValue: true, okText: "Yes", cancelText: "No" } });
    expect(w.props("okText")).toBe("Yes");
    expect(w.props("cancelText")).toBe("No");
  });
  it("hideHeader", () => { expect(mount(Modal, { props: { modelValue: true, hideHeader: true } }).props("hideHeader")).toBe(true); });
  it("hideFooter", () => { expect(mount(Modal, { props: { modelValue: true, hideFooter: true } }).props("hideFooter")).toBe(true); });
  it("hideClose", () => { expect(mount(Modal, { props: { modelValue: true, hideClose: true } }).props("hideClose")).toBe(true); });
  it("hideCancel", () => { expect(mount(Modal, { props: { modelValue: true, hideCancel: true } }).props("hideCancel")).toBe(true); });
  it("hideTitleIcon", () => { expect(mount(Modal, { props: { modelValue: true, hideTitleIcon: true } }).props("hideTitleIcon")).toBe(true); });
  it("maskClosable", () => { expect(mount(Modal, { props: { modelValue: true, maskClosable: false } }).props("maskClosable")).toBe(false); });
  it("top/bottom", () => {
    const w = mount(Modal, { props: { modelValue: true, top: "100px", bottom: "50px" } });
    expect(w.props("top")).toBe("100px");
    expect(w.props("bottom")).toBe("50px");
  });
  it("borderRadius", () => { expect(mount(Modal, { props: { modelValue: true, borderRadius: "12px" } }).props("borderRadius")).toBe("12px"); });
  it("bodyClass", () => { expect(mount(Modal, { props: { modelValue: true, bodyClass: "custom-body" } }).props("bodyClass")).toBe("custom-body"); });
  it("isMethod", () => { expect(mount(Modal, { props: { modelValue: true, isMethod: true } }).props("isMethod")).toBe(true); });
  it("type", () => {
    ["info", "success", "warning", "error", "confirm"].forEach(t => {
      expect(mount(Modal, { props: { modelValue: true, type: t } }).props("type")).toBe(t);
    });
  });
});
