import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import Tag from "../src/tag.vue";

describe("Tag", () => {
  it("create", () => {
    const wrapper = mount(Tag, { slots: { default: "Tag" } });
    expect(wrapper.classes()).toContain("bp-tag");
    expect(wrapper.text()).toBe("Tag");
  });

  it("status", () => {
    const wrapper = mount(Tag, { props: { status: "success" } });
    expect(wrapper.classes()).toContain("bp-tag-success");
  });

  it("border", () => {
    const wrapper = mount(Tag, { props: { border: true } });
    expect(wrapper.classes()).toContain("bp-tag-border");
  });

  it("closeable", () => {
    const wrapper = mount(Tag, { props: { closeable: true } });
    expect(wrapper.find(".bp-tag-close").exists()).toBe(true);
  });

  it("close emits event", async () => {
    const wrapper = mount(Tag, { props: { closeable: true } });
    await wrapper.find(".bp-tag-close").trigger("click");
    expect(wrapper.emitted("close")).toBeTruthy();
  });
});
