import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import Tooltip from "../src/tooltip.vue";
import { nextTick } from "vue";

const createWrapper = (props = {}, slots = {}) => {
  return mount(Tooltip, {
    props: { content: "Tooltip text", ...props },
    slots: { default: "<button>Hover</button>", ...slots },
  });
};

/** 打开 tooltip 并等待 DOM 更新 */
const openTooltip = async (wrapper: ReturnType<typeof createWrapper>) => {
  (wrapper.vm as any).isOpen = true;
  await nextTick();
};

describe("Tooltip", () => {
  it("create", () => {
    const wrapper = createWrapper();
    expect(wrapper.text()).toContain("Hover");
    expect(wrapper.find(".bp-tooltip-inner").exists()).toBe(true);
  });

  describe("content", () => {
    it("content prop rendered when opened", async () => {
      const wrapper = createWrapper({ content: "Help text" });
      await openTooltip(wrapper);
      expect(wrapper.find(".bp-tooltip-content").text()).toContain("Help text");
    });

    it("content prop reflected in props", () => {
      const wrapper = createWrapper({ content: "Help text" });
      expect(wrapper.props("content")).toBe("Help text");
    });

    it("content slot overrides content prop", async () => {
      const wrapper = createWrapper({ content: "Prop Text" }, { content: "<em>Slot Content</em>" });
      await openTooltip(wrapper);
      expect(wrapper.find(".bp-tooltip-content em").text()).toBe("Slot Content");
    });
  });

  describe("theme", () => {
    it("default theme is dark", async () => {
      const wrapper = createWrapper();
      expect(wrapper.props("theme")).toBe("dark");
      await openTooltip(wrapper);
      expect(wrapper.find(".bp-tooltip-dark").exists()).toBe(true);
    });

    it("light theme", async () => {
      const wrapper = createWrapper({ theme: "light" });
      expect(wrapper.props("theme")).toBe("light");
      await openTooltip(wrapper);
      expect(wrapper.find(".bp-tooltip-light").exists()).toBe(true);
    });

    it("light theme renders triangle-second", async () => {
      const wrapper = createWrapper({ theme: "light" });
      await openTooltip(wrapper);
      expect(wrapper.find(".bp-tooltip-triangle-second").exists()).toBe(true);
    });

    it("dark theme does not render triangle-second", async () => {
      const wrapper = createWrapper({ theme: "dark" });
      await openTooltip(wrapper);
      expect(wrapper.find(".bp-tooltip-triangle-second").exists()).toBe(false);
    });
  });

  describe("position", () => {
    it("default position is top", async () => {
      const wrapper = createWrapper();
      expect(wrapper.props("position")).toBe("top");
      await openTooltip(wrapper);
      expect(wrapper.find(".bp-tooltip-triangle-top").exists()).toBe(true);
    });

    it("position bottom renders upward arrow", async () => {
      const wrapper = createWrapper({ position: "bottom" });
      expect(wrapper.props("position")).toBe("bottom");
      await openTooltip(wrapper);
      expect(wrapper.find(".bp-tooltip-triangle-bottom").exists()).toBe(true);
      expect(wrapper.find(".bp-tooltip-triangle-top").exists()).toBe(false);
    });

    it("light theme with bottom position", async () => {
      const wrapper = createWrapper({ theme: "light", position: "bottom" });
      await openTooltip(wrapper);
      expect(wrapper.find(".bp-tooltip-triangle-bottom").exists()).toBe(true);
      expect(wrapper.find(".bp-tooltip-triangle-second-bottom").exists()).toBe(true);
      expect(wrapper.find(".bp-tooltip-triangle-top").exists()).toBe(false);
    });

    it("light theme with top position", async () => {
      const wrapper = createWrapper({ theme: "light", position: "top" });
      await openTooltip(wrapper);
      expect(wrapper.find(".bp-tooltip-triangle-top").exists()).toBe(true);
      expect(wrapper.find(".bp-tooltip-triangle-second-top").exists()).toBe(true);
    });
  });

  describe("trigger", () => {
    it("default trigger is hover", () => {
      const wrapper = createWrapper();
      expect(wrapper.props("trigger")).toBe("hover");
    });

    it("click trigger", () => {
      const wrapper = createWrapper({ trigger: "click" });
      expect(wrapper.props("trigger")).toBe("click");
    });
  });

  describe("default props", () => {
    it("should use default values", () => {
      const wrapper = mount(Tooltip, {
        slots: { default: "<span>Target</span>" },
      });
      expect(wrapper.props("content")).toBe("");
      expect(wrapper.props("theme")).toBe("dark");
      expect(wrapper.props("position")).toBe("top");
      expect(wrapper.props("trigger")).toBe("hover");
    });
  });
});
