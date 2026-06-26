import { App, computed, getCurrentInstance, MaybeRef, provide, unref } from "vue";
import { ConfigProviderContext } from "./types";
import { namespaceKey, prefixKey, localeKey, sizeKey, zIndexKey, emptyTextKey } from "@birdpaper-ui/hooks";

const defaultConfig: Required<ConfigProviderContext> = {
  prefix: "Bp",
  namespace: "bp",
  locale: "zh-CN",
  size: "default",
  zIndex: 2000,
  emptyText: "暂无数据",
};

export const provideGlobalConfig = (config: MaybeRef<ConfigProviderContext>, app?: App) => {
  const isSetup = !!getCurrentInstance();
  const provideFunction = app?.provide ?? (isSetup ? provide : undefined);

  if (!provideFunction) return;

  const cfg = { ...defaultConfig, ...unref(config) };

  provideFunction(
    namespaceKey,
    computed(() => cfg.namespace)
  );
  provideFunction(
    prefixKey,
    computed(() => cfg.prefix)
  );
  provideFunction(
    localeKey,
    computed(() => cfg.locale)
  );
  provideFunction(
    sizeKey,
    computed(() => cfg.size)
  );
  provideFunction(
    zIndexKey,
    computed(() => cfg.zIndex)
  );
  provideFunction(
    emptyTextKey,
    computed(() => cfg.emptyText)
  );
};
