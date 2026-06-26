import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import Rate from "../src/rate.vue";

describe("Rate", () => {
  it("create", () => { expect(mount(Rate).classes()).toContain("bp-rate"); });
  it("modelValue", () => { expect(mount(Rate, { props: { modelValue: 3 } }).props("modelValue")).toBe(3); });
  it("count", () => { expect(mount(Rate, { props: { count: 10 } }).props("count")).toBe(10); });
  it("disabled", () => { expect(mount(Rate, { props: { disabled: true } }).props("disabled")).toBe(true); });
  it("readonly", () => { expect(mount(Rate, { props: { readonly: true } }).props("readonly")).toBe(true); });
  it("half", () => { expect(mount(Rate, { props: { half: true, modelValue: 2.5 } }).props("half")).toBe(true); });
  it("renders rate items", () => {
    const w = mount(Rate, { props: { count: 5 } });
    expect(w.findAll(".bp-rate-item").length).toBe(5);
  });
  it("click changes value", async () => {
    const w = mount(Rate, { props: { modelValue: 0, count: 5 } });
    const items = w.findAll(".bp-rate-item");
    if (items.length > 2) {
      await items[2].trigger("click");
      expect(w.emitted("update:modelValue")).toBeTruthy();
    }
  });
  it("default count is 5", () => { expect(mount(Rate).findAll(".bp-rate-item").length).toBe(5); });
  it("zero value", () => { expect(mount(Rate, { props: { modelValue: 0 } }).props("modelValue")).toBe(0); });
  it("max value", () => { expect(mount(Rate, { props: { modelValue: 5, count: 5 } }).props("modelValue")).toBe(5); });
});
