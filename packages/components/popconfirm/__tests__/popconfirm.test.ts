import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import Popconfirm from "../src/popconfirm.vue";

describe("Popconfirm", () => {
  it("create", () => {
    const wrapper = mount(Popconfirm, {
      props: { content: "Are you sure?" },
      slots: { default: "<button>Delete</button>" },
    });
    expect(wrapper.text()).toContain("Delete");
  });

  it("content prop", () => {
    const wrapper = mount(Popconfirm, {
      props: { content: "Confirm delete?" },
      slots: { default: "<button>Remove</button>" },
    });
    expect(wrapper.props("content")).toBe("Confirm delete?");
  });

  it("okText and cancelText", () => {
    const wrapper = mount(Popconfirm, {
      props: { content: "Sure?", okText: "Yes", cancelText: "No" },
      slots: { default: "<button>Action</button>" },
    });
    expect(wrapper.props("okText")).toBe("Yes");
    expect(wrapper.props("cancelText")).toBe("No");
  });
});
