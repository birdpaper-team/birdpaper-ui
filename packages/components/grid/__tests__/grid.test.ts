import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import Row from "../src/row.vue";
import Col from "../src/col.vue";
import { h } from "vue";

describe("Grid", () => {
  it("Row create", () => {
    const wrapper = mount(Row, { slots: { default: "<div>Content</div>" } });
    expect(wrapper.classes()).toContain("bp-row");
  });

  it("Row gutter", () => {
    const wrapper = mount(Row, { props: { gutter: 16 } });
    expect(wrapper.props("gutter")).toBe(16);
  });

  it("Row justify", () => {
    const wrapper = mount(Row, { props: { justify: "center" } });
    expect(wrapper.props("justify")).toBe("center");
  });

  it("Row align", () => {
    const wrapper = mount(Row, { props: { align: "center" } });
    expect(wrapper.props("align")).toBe("center");
  });

  it("Col create", () => {
    const wrapper = mount(Col, { slots: { default: "Col" } });
    expect(wrapper.classes()).toContain("bp-col");
  });

  it("Col span", () => {
    const wrapper = mount(Col, { props: { span: 12 } });
    expect(wrapper.props("span")).toBe(12);
  });
});
