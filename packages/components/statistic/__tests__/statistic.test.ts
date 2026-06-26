import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import Statistic from "../src/statistic.vue";

describe("Statistic", () => {
  it("create", () => {
    expect(mount(Statistic, { props: { modelValue: 123 } }).classes()).toContain("bp-statistic");
  });
  it("renders value", () => {
    expect(
      mount(Statistic, { props: { modelValue: 42 } })
        .find(".bp-statistic-int")
        .text()
    ).toContain("42");
  });
  it("placeholder", () => {
    expect(mount(Statistic).text()).toContain("--");
  });
  it("custom placeholder", () => {
    expect(mount(Statistic, { props: { placeholder: "N/A" } }).text()).toContain("N/A");
  });
  it("unit", () => {
    expect(
      mount(Statistic, { props: { modelValue: 100, unit: "%" } })
        .find(".bp-statistic-unit")
        .text()
    ).toBe("%");
  });
  it("precision", () => {
    const w = mount(Statistic, { props: { modelValue: 3.14, precision: 2 } });
    expect(w.find(".bp-statistic-int").text()).toContain("3");
    expect(w.find(".bp-statistic-dev").text()).toContain("14");
  });
  it("precision rounds correctly", () => {
    const w = mount(Statistic, { props: { modelValue: 1.99, precision: 1 } });
    expect(w.find(".bp-statistic-int").text()).toContain("2");
    expect(w.find(".bp-statistic-dev").text()).toContain("0");
  });
  it("precision pads zeros", () => {
    const w = mount(Statistic, { props: { modelValue: 3.1, precision: 4 } });
    expect(w.find(".bp-statistic-dev").text()).toContain("1000");
  });
  it("precision zero no dev", () => {
    expect(
      mount(Statistic, { props: { modelValue: 100, precision: 0 } })
        .find(".bp-statistic-dev")
        .exists()
    ).toBe(false);
  });
  it("color", () => {
    expect(mount(Statistic, { props: { modelValue: 50, color: "#f00" } }).attributes("style")).toContain("#f00");
  });
  it("fontSize string", () => {
    expect(
      mount(Statistic, { props: { modelValue: 1, fontSize: "32px" } })
        .find(".bp-statistic-int")
        .attributes("style")
    ).toContain("32px");
  });
  it("fontSize array", () => {
    const w = mount(Statistic, { props: { modelValue: 3.14, precision: 2, fontSize: ["32px", "18px"] } });
    expect(w.find(".bp-statistic-int").attributes("style")).toContain("32px");
    expect(w.find(".bp-statistic-dev").attributes("style")).toContain("18px");
  });
  it("showSeparator", () => {
    expect(
      mount(Statistic, { props: { modelValue: 1234567, showSeparator: true } })
        .find(".bp-statistic-int")
        .text()
    ).toContain("1,234,567");
  });
  it("custom separator", () => {
    expect(
      mount(Statistic, { props: { modelValue: 1234567, showSeparator: true, separator: "." } })
        .find(".bp-statistic-int")
        .text()
    ).toContain("1.234.567");
  });
  it("prefix slot", () => {
    const w = mount(Statistic, { props: { modelValue: 100 }, slots: { prefix: "<span>$</span>" } });
    expect(w.find(".bp-statistic-prefix").exists()).toBe(true);
    expect(w.text()).toContain("$");
  });
  it("negative value", () => {
    expect(mount(Statistic, { props: { modelValue: -50 } }).text()).toContain("-50");
  });
  it("zero value", () => {
    expect(mount(Statistic, { props: { modelValue: 0 } }).text()).toContain("0");
  });
  it("animation prop", () => {
    expect(mount(Statistic, { props: { modelValue: 100, animation: true, duration: 500 } }).props("animation")).toBe(
      true
    );
  });
  it("valueFrom prop", () => {
    expect(mount(Statistic, { props: { modelValue: 100, valueFrom: 0, animation: true } }).props("valueFrom")).toBe(0);
  });
});
