import { describe, expect, it } from "vitest";
import { createApp, h } from "vue";
import { provideGlobalConfig, ConfigProviderContext } from "../src/use-config-provider";

describe("ConfigProvider", () => {
  it("provideGlobalConfig with namespace", () => {
    const context: ConfigProviderContext = { namespace: "custom" };
    // Should not throw
    expect(() => provideGlobalConfig(context)).not.toThrow();
  });

  it("ConfigProviderContext type", () => {
    const ctx: ConfigProviderContext = { prefix: "MyP", namespace: "my-ns" };
    expect(ctx.prefix).toBe("MyP");
    expect(ctx.namespace).toBe("my-ns");
  });
});
