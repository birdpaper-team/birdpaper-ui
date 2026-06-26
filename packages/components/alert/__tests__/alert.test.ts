import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import Alert from "../src/alert.vue";

describe("Alert", () => {
  it("create", () => {
    const wrapper = mount(Alert, { props: { title: "Alert Title" } });
    expect(wrapper.classes()).toContain("bp-alert");
    expect(wrapper.text()).toContain("Alert Title");
  });

  it("status", () => {
    const wrapper = mount(Alert, { props: { title: "Test", status: "success" } });
    expect(wrapper.classes()).toContain("bp-alert-success");
  });

  it("content", () => {
    const wrapper = mount(Alert, { props: { title: "Title", content: "Content text" } });
    expect(wrapper.find(".bp-alert-content").text()).toBe("Content text");
  });

  it("hideBorder", () => {
    const wrapper = mount(Alert, { props: { title: "Test", hideBorder: true } });
    expect(wrapper.classes()).toContain("bp-alert-hide-border");
  });

  it("hideIcon", () => {
    const wrapper = mount(Alert, { props: { title: "Test", hideIcon: true } });
    expect(wrapper.find("svg").exists()).toBe(false);
  });

  it("showClose", () => {
    const wrapper = mount(Alert, { props: { title: "Test", showClose: true } });
    expect(wrapper.find(".bp-alert-inner-close").exists()).toBe(true);
  });

  it("close click hides alert", async () => {
    const wrapper = mount(Alert, { props: { title: "Test", showClose: true } });
    await wrapper.find(".bp-alert-inner-close").trigger("click");
    expect(wrapper.find(".bp-alert").exists()).toBe(false);
  });
});
