import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import Statistic from "../src/statistic.vue";

describe("Statistic", () => {
  it("create", () => {
    const wrapper = mount(Statistic, { props: { value: 12345 } });
    expect(wrapper.classes()).toContain("bp-statistic");
  });

  it("placeholder", () => {
    const wrapper = mount(Statistic);
    expect(wrapper.text()).toContain("--");
  });

  it("unit", () => {
    const wrapper = mount(Statistic, { props: { value: 100, unit: "%" } });
    expect(wrapper.text()).toContain("%");
  });

  it("precision", () => {
    const wrapper = mount(Statistic, { props: { value: 3.14159, precision: 2 } });
    expect(wrapper.props("precision")).toBe(2);
  });

  it("color", () => {
    const wrapper = mount(Statistic, { props: { value: 50, color: "#ff0000" } });
    expect(wrapper.attributes("style")).toContain("#ff0000");
  });

  it("prefix slot", () => {
    const wrapper = mount(Statistic, {
      props: { value: 100 },
      slots: { prefix: "<span>$</span>" },
    });
    expect(wrapper.text()).toContain("$");
  });
});
