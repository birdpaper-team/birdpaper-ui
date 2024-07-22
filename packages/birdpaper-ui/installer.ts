import type { App, Plugin } from "@vue/runtime-core";

export const makeInstaller = (components: Plugin[] = []) => {
  const install = (app: App, options?: any) => {
    components.forEach((c) => app.use(c));
  };

  return {
    install,
  };
};
