import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import Button from "../src/button.vue";

describe("Button", () => {
  it("create", () => {
    const wrapper = mount(Button, {
      slots: {
        default: "Hello world",
      },
    });
    expect(wrapper.classes()).toContain("bp-button");
  });
});
