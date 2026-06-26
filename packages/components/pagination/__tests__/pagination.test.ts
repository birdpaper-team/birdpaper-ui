import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import Pagination from "../src/pagination.vue";

describe("Pagination", () => {
  it("create", () => {
    const wrapper = mount(Pagination, { props: { total: 100 } });
    expect(wrapper.classes()).toContain("bp-pagination");
  });

  it("total", () => {
    const wrapper = mount(Pagination, { props: { total: 100, pageSize: 10 } });
    expect(wrapper.props("total")).toBe(100);
  });

  it("current page", () => {
    const wrapper = mount(Pagination, { props: { total: 100, current: 3 } });
    expect(wrapper.props("current")).toBe(3);
  });

  it("pageSize", () => {
    const wrapper = mount(Pagination, { props: { total: 100, pageSize: 20 } });
    expect(wrapper.props("pageSize")).toBe(20);
  });

  it("disabled", () => {
    const wrapper = mount(Pagination, { props: { total: 100, disabled: true } });
    expect(wrapper.props("disabled")).toBe(true);
  });

  it("size", () => {
    const wrapper = mount(Pagination, { props: { total: 100, size: "small" } });
    expect(wrapper.classes()).toContain("bp-pagination-small");
  });

  it("layout", () => {
    const wrapper = mount(Pagination, { props: { total: 100, layout: "prev, pager, next" } });
    expect(wrapper.props("layout")).toBe("prev, pager, next");
  });
});
