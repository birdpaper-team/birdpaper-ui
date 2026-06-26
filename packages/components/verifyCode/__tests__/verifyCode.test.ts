import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import VerifyCode from "../src/verifyCode.vue";

describe("VerifyCode", () => {
  it("create", () => {
    const wrapper = mount(VerifyCode);
    expect(wrapper.classes()).toContain("bp-verify-code");
  });

  it("length", () => {
    const wrapper = mount(VerifyCode, { props: { length: 6 } });
    expect(wrapper.props("length")).toBe(6);
  });

  it("disabled", () => {
    const wrapper = mount(VerifyCode, { props: { disabled: true } });
    expect(wrapper.props("disabled")).toBe(true);
  });

  it("type", () => {
    const wrapper = mount(VerifyCode, { props: { type: "text" } });
    expect(wrapper.props("type")).toBe("text");
  });
});
