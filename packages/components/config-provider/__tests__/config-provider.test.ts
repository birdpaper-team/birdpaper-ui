import { describe, expect, it } from "vitest";
import { createApp, h, ref, inject, defineComponent } from "vue";
import { provideGlobalConfig } from "../src/use-config-provider";
import type { ConfigProviderContext } from "../src/types";
import { namespaceKey, sizeKey, localeKey, zIndexKey, emptyTextKey, prefixKey } from "@birdpaper-ui/hooks";

describe("ConfigProvider", () => {
  it("provideGlobalConfig with defaults", () => {
    const context: ConfigProviderContext = {};
    expect(() => provideGlobalConfig(context)).not.toThrow();
  });

  it("provideGlobalConfig with custom namespace", () => {
    const context: ConfigProviderContext = { namespace: "custom" };
    expect(() => provideGlobalConfig(context)).not.toThrow();
  });

  it("provideGlobalConfig with all options", () => {
    const context: ConfigProviderContext = {
      prefix: "My",
      namespace: "my-ns",
      locale: "en",
      size: "large",
      zIndex: 3000,
      emptyText: "No Data",
    };
    expect(() => provideGlobalConfig(context)).not.toThrow();
  });

  it("provides locale via injection", () => {
    const app = createApp(defineComponent({
      setup() {
        const locale = inject(localeKey, ref("zh-CN"));
        expect(locale.value).toBe("en");
        return () => h("div");
      },
    }));
    provideGlobalConfig({ locale: "en" }, app);
  });

  it("provides size via injection", () => {
    const app = createApp(defineComponent({
      setup() {
        const size = inject(sizeKey, ref("default"));
        expect(size.value).toBe("small");
        return () => h("div");
      },
    }));
    provideGlobalConfig({ size: "small" }, app);
  });

  it("provides zIndex via injection", () => {
    const app = createApp(defineComponent({
      setup() {
        const zIndex = inject(zIndexKey, ref(2000));
        expect(zIndex.value).toBe(5000);
        return () => h("div");
      },
    }));
    provideGlobalConfig({ zIndex: 5000 }, app);
  });

  it("provides emptyText via injection", () => {
    const app = createApp(defineComponent({
      setup() {
        const emptyText = inject(emptyTextKey, ref("暂无数据"));
        expect(emptyText.value).toBe("Nothing here");
        return () => h("div");
      },
    }));
    provideGlobalConfig({ emptyText: "Nothing here" }, app);
  });

  it("provides prefix via injection", () => {
    const app = createApp(defineComponent({
      setup() {
        const prefix = inject(prefixKey, ref("Bp"));
        expect(prefix.value).toBe("MyApp");
        return () => h("div");
      },
    }));
    provideGlobalConfig({ prefix: "MyApp" }, app);
  });

  it("ConfigProviderContext type", () => {
    const ctx: ConfigProviderContext = { prefix: "MyP", namespace: "my-ns", locale: "en", size: "mini", zIndex: 1000, emptyText: "N/A" };
    expect(ctx.prefix).toBe("MyP");
    expect(ctx.namespace).toBe("my-ns");
    expect(ctx.locale).toBe("en");
    expect(ctx.size).toBe("mini");
    expect(ctx.zIndex).toBe(1000);
    expect(ctx.emptyText).toBe("N/A");
  });
});
