import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import Avatar from "../src/avatar.vue";

describe("Avatar", () => {
  it("create", () => {
    const wrapper = mount(Avatar);
    expect(wrapper.classes()).toContain("bp-avatar");
  });

  it("shape", () => {
    const wrapper = mount(Avatar, { props: { shape: "square" } });
    expect(wrapper.classes()).toContain("bp-avatar-square");
  });

  it("size string", () => {
    const wrapper = mount(Avatar, { props: { size: "large" } });
    expect(wrapper.classes()).toContain("bp-avatar-large");
  });

  it("slot content", () => {
    const wrapper = mount(Avatar, { slots: { default: "AB" } });
    expect(wrapper.text()).toBe("AB");
  });

  it("imageUrl renders image", () => {
    const wrapper = mount(Avatar, { props: { imageUrl: "https://example.com/img.png" } });
    expect(wrapper.find(".bp-avatar-image").exists()).toBe(true);
  });

  it("default shape is circle", () => {
    const wrapper = mount(Avatar);
    expect(wrapper.classes()).toContain("bp-avatar-circle");
  });
});
