import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import Image from "../src/image.vue";

describe("Image", () => {
  it("create", () => {
    const wrapper = mount(Image, { props: { src: "https://example.com/img.png" } });
    expect(wrapper.classes()).toContain("bp-image");
  });

  it("alt", () => {
    const wrapper = mount(Image, { props: { src: "#", alt: "My Image" } });
    expect(wrapper.props("alt")).toBe("My Image");
  });

  it("fit", () => {
    const wrapper = mount(Image, { props: { src: "#", fit: "contain" } });
    expect(wrapper.props("fit")).toBe("contain");
  });

  it("width and height", () => {
    const wrapper = mount(Image, { props: { src: "#", width: 200, height: 100 } });
    expect(wrapper.props("width")).toBe(200);
    expect(wrapper.props("height")).toBe(100);
  });

  it("lazy", () => {
    const wrapper = mount(Image, { props: { src: "#", lazy: true } });
    expect(wrapper.props("lazy")).toBe(true);
  });
});
