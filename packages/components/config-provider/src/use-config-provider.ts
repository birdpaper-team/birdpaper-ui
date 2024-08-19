import {
  App,
  computed,
  getCurrentInstance,
  MaybeRef,
  provide,
  unref,
} from "vue";
import { ConfigProviderContext } from "./types";
import { namespaceKey } from "@birdpaper-ui/hooks";

export const provideGlobalConfig = (
  config: MaybeRef<ConfigProviderContext>,
  app?: App
) => {
  const isSetup = !!getCurrentInstance();
  const provideFunction = app?.provide ?? (isSetup ? provide : undefined);

  if (!provideFunction) return;

  const cfg = unref(config);

  provideFunction(
    namespaceKey,
    computed(() => cfg.namespace)
  );
};
