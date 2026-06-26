import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import Modal from "../src/modal.vue";

describe("Modal", () => {
  it("create with model true", () => {
    const wrapper = mount(Modal, { props: { modelValue: true, title: "Modal Title" }, attachTo: document.body });
    // Modal uses Teleport to body, find via document.body
    const modalContainer = document.body.querySelector(".bp-modal-container");
    expect(modalContainer).toBeTruthy();
    wrapper.unmount();
  });

  it("title renders in body", () => {
    const wrapper = mount(Modal, { props: { modelValue: true, title: "My Modal" }, attachTo: document.body });
    expect(document.body.innerHTML).toContain("My Modal");
    wrapper.unmount();
  });

  it("content renders in body", () => {
    const wrapper = mount(Modal, { props: { modelValue: true, content: "Body text" }, attachTo: document.body });
    expect(document.body.innerHTML).toContain("Body text");
    wrapper.unmount();
  });

  it("okText and cancelText", () => {
    const wrapper = mount(Modal, {
      props: { modelValue: true, okText: "Sure", cancelText: "Nope" },
      attachTo: document.body,
    });
    expect(document.body.innerHTML).toContain("Sure");
    expect(document.body.innerHTML).toContain("Nope");
    wrapper.unmount();
  });

  it("fullscreen class", () => {
    const wrapper = mount(Modal, { props: { modelValue: true, fullscreen: true }, attachTo: document.body });
    expect(document.body.querySelector(".is-fullscreen")).toBeTruthy();
    wrapper.unmount();
  });

  it("center class", () => {
    const wrapper = mount(Modal, { props: { modelValue: true, center: true }, attachTo: document.body });
    expect(document.body.querySelector(".is-center")).toBeTruthy();
    wrapper.unmount();
  });

  it("hideHeader hides header", () => {
    const wrapper = mount(Modal, {
      props: { modelValue: true, title: "T", hideHeader: true },
      attachTo: document.body,
    });
    expect(document.body.querySelector(".bp-modal-header")).toBeNull();
    wrapper.unmount();
  });
});
