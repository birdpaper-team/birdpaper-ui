import { ConfigProviderContext, provideGlobalConfig } from "@birdpaper-ui/components/config-provider";
import type { App } from "vue";

export const installer = (components: any[] = []) => {
  const install = (app: App, options?: ConfigProviderContext) => {
    components.forEach((c: any) => {
      if (typeof c === "function" || typeof c.install === "function") {
        app.use(c, options);
      } else {
        app.component(`${options?.prefix || "Bp"}${c?.name}`, c);
      }
    });

    if (options) provideGlobalConfig(options, app as any);
  };

  return {
    // NOTE: Keep in sync with packages/birdpaper-ui/package.json version.
    version: "3.0.0-alpha.47",
    install,
  };
};
