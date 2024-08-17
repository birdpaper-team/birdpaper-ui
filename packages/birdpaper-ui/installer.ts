import type { App, Plugin } from "vue";

export const installer = (components: Plugin[] = []) => {
  const install = (app: App) => {
    components.forEach((c) => app.use(c));
  };

  return {
    // TODO: Write first, then update automatically.
    version: "3.0.0",
    install,
  };
};
