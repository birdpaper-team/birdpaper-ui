import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import Popconfirm from "../src/popconfirm.vue";

describe("Popconfirm", () => {
  it("create", () => {
    const w = mount(Popconfirm, { props: { content: "Are you sure?" }, slots: { default: "<button>Delete</button>" } });
    expect(w.text()).toContain("Delete");
  });
  it("content", () => { expect(mount(Popconfirm, { props: { content: "Confirm?" }, slots: { default: "<button>X</button>" } }).props("content")).toBe("Confirm?"); });
  it("okText/cancelText", () => {
    const w = mount(Popconfirm, { props: { content: "?", okText: "Yes", cancelText: "No" }, slots: { default: "<button>X</button>" } });
    expect(w.props("okText")).toBe("Yes");
    expect(w.props("cancelText")).toBe("No");
  });
  it("type", () => {
    ["info", "success", "warning", "error"].forEach(t => {
      expect(mount(Popconfirm, { props: { content: "?", type: t }, slots: { default: "<span>X</span>" } }).props("type")).toBe(t);
    });
  });
  it("position", () => { expect(mount(Popconfirm, { props: { content: "?", position: "top" }, slots: { default: "<span>X</span>" } }).props("position")).toBe("top"); });
  it("slot content", () => {
    const w = mount(Popconfirm, { props: { content: "Sure?" }, slots: { default: "<button>Action</button>" } });
    expect(w.text()).toContain("Action");
  });
});
