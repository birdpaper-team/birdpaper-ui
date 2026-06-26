import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import Empty from "../src/empty.vue";

describe("Empty", () => {
  it("create", () => {
    const wrapper = mount(Empty);
    expect(wrapper.classes()).toContain("bp-empty");
  });

  it("content prop", () => {
    const wrapper = mount(Empty, { props: { content: "No Data" } });
    expect(wrapper.text()).toContain("No Data");
  });

  it("default content", () => {
    const wrapper = mount(Empty);
    expect(wrapper.text()).toContain("暂无数据");
  });

  it("image slot", () => {
    const wrapper = mount(Empty, { slots: { image: "<div class='custom-img'></div>" } });
    expect(wrapper.find(".custom-img").exists()).toBe(true);
  });
});
