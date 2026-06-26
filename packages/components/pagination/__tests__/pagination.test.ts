import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import Pagination from "../src/pagination.vue";

describe("Pagination", () => {
  it("create", () => { expect(mount(Pagination, { props: { total: 100 } }).classes()).toContain("bp-pagination"); });
  it("total", () => { expect(mount(Pagination, { props: { total: 100 } }).props("total")).toBe(100); });
  it("current", () => { expect(mount(Pagination, { props: { total: 100, current: 3 } }).props("current")).toBe(3); });
  it("pageSize", () => { expect(mount(Pagination, { props: { total: 100, pageSize: 20 } }).props("pageSize")).toBe(20); });
  it("disabled", () => { expect(mount(Pagination, { props: { total: 100, disabled: true } }).props("disabled")).toBe(true); });
  it("size", () => {
    expect(mount(Pagination, { props: { total: 100, size: "small" } }).classes()).toContain("bp-pagination-small");
    expect(mount(Pagination, { props: { total: 100, size: "mini" } }).classes()).toContain("bp-pagination-mini");
    expect(mount(Pagination, { props: { total: 100, size: "large" } }).classes()).toContain("bp-pagination-large");
  });
  it("layout", () => { expect(mount(Pagination, { props: { total: 100, layout: "prev, pager, next" } }).props("layout")).toBe("prev, pager, next"); });
  it("prevText", () => { expect(mount(Pagination, { props: { total: 100, prevText: "Previous" } }).props("prevText")).toBe("Previous"); });
  it("nextText", () => { expect(mount(Pagination, { props: { total: 100, nextText: "Next" } }).props("nextText")).toBe("Next"); });
  it("maxPager", () => { expect(mount(Pagination, { props: { total: 100, maxPager: 5 } }).props("maxPager")).toBe(5); });
  it("totalTmpString", () => { expect(mount(Pagination, { props: { total: 100, totalTmpString: "Total: {total}" } }).props("totalTmpString")).toBe("Total: {total}"); });
  it("jumperTmpString", () => { expect(mount(Pagination, { props: { total: 100, jumperTmpString: "Go to{jumper}" } }).props("jumperTmpString")).toBe("Go to{jumper}"); });
  it("sizesTmpString", () => { expect(mount(Pagination, { props: { total: 100, sizesTmpString: "{value} items/page" } }).props("sizesTmpString")).toBe("{value} items/page"); });
  it("sizesList", () => { expect(mount(Pagination, { props: { total: 100, sizesList: [5, 10, 20] } }).props("sizesList")).toEqual([5, 10, 20]); });
  it("renders pager items", () => {
    const w = mount(Pagination, { props: { total: 50, pageSize: 10 } });
    expect(w.find(".bp-pagination-container").exists()).toBe(true);
  });
});
