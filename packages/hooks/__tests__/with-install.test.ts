import { describe, expect, it, vi } from "vitest";
import { defineComponent, h, createApp } from "vue";
import { withInstall } from "../src/with-install";

describe("withInstall", () => {
  it("adds install method to component", () => {
    const Comp = defineComponent({
      name: "TestComp",
      setup() {
        return () => h("div", "test");
      },
    });

    const installed = withInstall(Comp);
    expect(typeof installed.install).toBe("function");
  });

  it("install registers component on app", () => {
    const Comp = defineComponent({
      name: "TestComp",
      setup() {
        return () => h("div", "test");
      },
    });

    const installed = withInstall(Comp);
    const app = createApp({ render: () => h("div") });
    const componentSpy = vi.spyOn(app, "component");

    installed.install(app);
    expect(componentSpy).toHaveBeenCalledWith("TestComp", Comp);
  });

  it("uses custom name when provided", () => {
    const Comp = defineComponent({
      name: "OriginalName",
      setup() {
        return () => h("div", "test");
      },
    });

    const installed = withInstall(Comp, "CustomName");
    const app = createApp({ render: () => h("div") });
    const componentSpy = vi.spyOn(app, "component");

    installed.install(app);
    expect(componentSpy).toHaveBeenCalledWith("CustomName", Comp);
  });
});
