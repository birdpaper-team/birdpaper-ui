import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import Spin from "../src/spin.vue";

describe("Spin", () => {
  it("create", () => {
    const wrapper = mount(Spin, { slots: { default: "<div>Content</div>" } });
    expect(wrapper.classes()).toContain("bp-spin");
    expect(wrapper.text()).toContain("Content");
  });

  it("spinning", () => {
    const wrapper = mount(Spin, { props: { spinning: true } });
    expect(wrapper.find(".bp-spin-mask").exists()).toBe(true);
  });

  it("not spinning", () => {
    const wrapper = mount(Spin, { props: { spinning: false } });
    expect(wrapper.find(".bp-spin-mask").exists()).toBe(false);
  });

  it("description", () => {
    const wrapper = mount(Spin, { props: { spinning: true, description: "Loading..." } });
    expect(wrapper.text()).toContain("Loading...");
  });
});
