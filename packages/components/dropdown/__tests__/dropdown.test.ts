import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import Dropdown from "../src/dropdown.vue";

describe("Dropdown", () => {
  it("create", () => {
    const wrapper = mount(Dropdown, {
      slots: {
        default: "<button>Trigger</button>",
        content: "<div>Menu</div>",
      },
    });
    expect(wrapper.text()).toContain("Trigger");
  });

  it("trigger", () => {
    const wrapper = mount(Dropdown, {
      props: { trigger: "hover" },
      slots: { default: "<button>Hover</button>" },
    });
    expect(wrapper.props("trigger")).toBe("hover");
  });
});
