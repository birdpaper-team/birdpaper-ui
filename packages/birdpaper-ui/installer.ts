import type { App, Plugin } from "vue";

export const installer = (components: Plugin[] = []) => {
  const install = (app: App) => {
    components.forEach((c) => app.use(c));
  };

  return {
    version: "3.0.0",
    install,
  };
};
