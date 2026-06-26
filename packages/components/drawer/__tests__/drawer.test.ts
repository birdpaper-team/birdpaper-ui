import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import Drawer from "../src/drawer.vue";

describe("Drawer", () => {
  it("create with model true", () => {
    const wrapper = mount(Drawer, { props: { modelValue: true, title: "Drawer" } });
    expect(wrapper.props("modelValue")).toBe(true);
    expect(wrapper.props("title")).toBe("Drawer");
    wrapper.unmount();
  });

  it("title", () => {
    const wrapper = mount(Drawer, { props: { modelValue: true, title: "My Drawer" } });
    expect(wrapper.props("title")).toBe("My Drawer");
    wrapper.unmount();
  });

  it("placement", () => {
    const wrapper = mount(Drawer, { props: { modelValue: true, placement: "left" }, attachTo: document.body });
    expect(wrapper.props("placement")).toBe("left");
    wrapper.unmount();
  });
});
