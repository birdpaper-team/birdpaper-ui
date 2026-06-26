import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import Steps from "../src/steps";
import Step from "../src/components/step.vue";
import { h } from "vue";

describe("Steps", () => {
  it("create", () => {
    const wrapper = mount(Steps, {
      props: { modelValue: 0 },
      slots: {
        default: () => [h(Step, {}, () => "Step 1"), h(Step, {}, () => "Step 2"), h(Step, {}, () => "Step 3")],
      },
    });
    expect(wrapper.classes()).toContain("bp-steps");
  });

  it("current step", () => {
    const wrapper = mount(Steps, {
      props: { modelValue: 1 },
      slots: {
        default: () => [h(Step, {}, () => "Step 1"), h(Step, {}, () => "Step 2")],
      },
    });
    expect(wrapper.props("modelValue")).toBe(1);
  });

  it("type vertical", () => {
    const wrapper = mount(Steps, {
      props: { modelValue: 0, type: "vertical" },
      slots: {
        default: () => [h(Step, {}, () => "Step 1")],
      },
    });
    expect(wrapper.props("type")).toBe("vertical");
  });
});

describe("Step", () => {
  it("renders title", () => {
    const wrapper = mount(Step, {
      props: { index: 0, status: "finish" },
      slots: { default: "My Step" },
    });
    expect(wrapper.text()).toContain("My Step");
  });

  it("description", () => {
    const wrapper = mount(Step, {
      props: { index: 0, status: "process", description: "Details here" },
    });
    expect(wrapper.text()).toContain("Details here");
  });
});
