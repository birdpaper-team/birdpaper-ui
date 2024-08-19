import {
  ConfigProviderContext,
  provideGlobalConfig,
} from "@birdpaper-ui/components/config-provider";
import type { App, Plugin } from "vue";

export const installer = (components: Plugin[] = []) => {
  const install = (app: App, options?: ConfigProviderContext) => {
    components.forEach((c) => app.use(c));

    if (options) provideGlobalConfig(options, app);
  };

  return {
    // TODO: Write first, then update automatically.
    version: "3.0.0",
    install,
  };
};
