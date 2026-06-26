import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import Link from "../src/link.vue";

describe("Link", () => {
  it("create", () => {
    const wrapper = mount(Link, { slots: { default: "Link Text" } });
    expect(wrapper.classes()).toContain("bp-link");
    expect(wrapper.text()).toBe("Link Text");
  });

  it("href", () => {
    const wrapper = mount(Link, { props: { href: "https://example.com" } });
    expect(wrapper.attributes("href")).toBe("https://example.com");
  });

  it("target", () => {
    const wrapper = mount(Link, { props: { href: "#", target: "_blank" } });
    expect(wrapper.attributes("target")).toBe("_blank");
  });

  it("disabled", () => {
    const wrapper = mount(Link, { props: { disabled: true } });
    expect(wrapper.classes()).toContain("bp-link-disabled");
  });

  it("status", () => {
    const wrapper = mount(Link, { props: { status: "danger" } });
    expect(wrapper.classes()).toContain("bp-link-danger");
  });
});
