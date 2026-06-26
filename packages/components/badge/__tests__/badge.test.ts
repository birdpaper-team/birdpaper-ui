import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import Badge from "../src/badge.vue";

describe("Badge", () => {
  it("create", () => {
    const wrapper = mount(Badge, { slots: { default: "Content" } });
    expect(wrapper.classes()).toContain("bp-badge");
    expect(wrapper.text()).toContain("Content");
  });

  it("count", () => {
    const wrapper = mount(Badge, { props: { count: 5 } });
    expect(wrapper.find(".bp-badge-inner").text()).toBe("5");
  });

  it("maxCount", () => {
    const wrapper = mount(Badge, { props: { count: 150, maxCount: 99 } });
    expect(wrapper.find(".bp-badge-inner").text()).toBe("99+");
  });

  it("text overrides count", () => {
    const wrapper = mount(Badge, { props: { count: 5, text: "NEW" } });
    expect(wrapper.find(".bp-badge-inner").text()).toBe("NEW");
  });

  it("dot mode", () => {
    const wrapper = mount(Badge, { props: { dot: true, count: 1 } });
    expect(wrapper.find(".bp-badge-dot").exists()).toBe(true);
  });

  it("status", () => {
    const wrapper = mount(Badge, { props: { status: "danger" } });
    expect(wrapper.classes()).toContain("bp-badge-danger");
  });

  it("zero count hides inner", () => {
    const wrapper = mount(Badge, { props: { count: 0 } });
    expect(wrapper.find(".bp-badge-inner").exists()).toBe(false);
  });
});
