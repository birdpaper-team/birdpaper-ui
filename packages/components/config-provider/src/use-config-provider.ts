import { App, computed, getCurrentInstance, MaybeRef, provide, unref } from "vue";
import { ConfigProviderContext } from "./types";
import { namespaceKey, prefixKey, localeKey, sizeKey, zIndexKey, emptyTextKey } from "@birdpaper-ui/hooks";

const defaultConfig: Required<ConfigProviderContext> = {
  prefix: "Bp",
  namespace: "bp",
  locale: "zh-CN",
  size: "default",
  zIndex: 3000,
  emptyText: "暂无数据",
};

export const provideGlobalConfig = (config: MaybeRef<ConfigProviderContext>, app?: App) => {
  const isSetup = !!getCurrentInstance();
  const provideFunction = app?.provide ?? (isSetup ? provide : undefined);

  if (!provideFunction) return;

  const getConfig = () => ({ ...defaultConfig, ...unref(config) });

  provideFunction(
    namespaceKey,
    computed(() => getConfig().namespace)
  );
  provideFunction(
    prefixKey,
    computed(() => getConfig().prefix)
  );
  provideFunction(
    localeKey,
    computed(() => getConfig().locale)
  );
  provideFunction(
    sizeKey,
    computed(() => getConfig().size)
  );
  provideFunction(
    zIndexKey,
    computed(() => getConfig().zIndex)
  );
  provideFunction(
    emptyTextKey,
    computed(() => getConfig().emptyText)
  );
};
