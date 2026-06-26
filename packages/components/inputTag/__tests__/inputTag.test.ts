import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import InputTag from "../src/input-tag.vue";

describe("InputTag", () => {
  it("create", () => {
    const wrapper = mount(InputTag);
    expect(wrapper.classes()).toContain("bp-input-tag");
  });

  it("v-model", () => {
    const wrapper = mount(InputTag, { props: { modelValue: ["tag1", "tag2"] } });
    expect(wrapper.props("modelValue")).toEqual(["tag1", "tag2"]);
  });

  it("placeholder", () => {
    const wrapper = mount(InputTag, { props: { placeholder: "Add tag" } });
    expect(wrapper.props("placeholder")).toBe("Add tag");
  });

  it("disabled", () => {
    const wrapper = mount(InputTag, { props: { disabled: true } });
    expect(wrapper.props("disabled")).toBe(true);
  });

  it("maxTagCount", () => {
    const wrapper = mount(InputTag, { props: { maxTagCount: 3 } });
    expect(wrapper.props("maxTagCount")).toBe(3);
  });
});
