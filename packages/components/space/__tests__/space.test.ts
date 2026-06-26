import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import Space from "../src/space";

describe("Space", () => {
  it("create", () => {
    const wrapper = mount(Space, { slots: { default: "<span>A</span><span>B</span>" } });
    expect(wrapper.classes()).toContain("bp-space");
  });

  it("size", () => {
    const wrapper = mount(Space, { props: { size: 20 } });
    expect(wrapper.props("size")).toBe(20);
  });
});
