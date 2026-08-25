import { App, computed, getCurrentInstance, MaybeRef, provide, unref } from "vue";
import { ConfigProviderContext } from "./types";
import {
  namespaceKey,
  prefixKey,
  localeKey,
  sizeKey,
  zIndexKey,
  emptyTextKey,
  localeMessagesKey,
  mergeLocale,
  resolveLocale,
} from "@birdpaper-ui/hooks";

const defaultConfig: Required<Omit<ConfigProviderContext, "emptyText" | "localeMessages">> = {
  prefix: "Bp",
  namespace: "bp",
  locale: "zh-CN",
  size: "default",
  zIndex: 3000,
};

export const provideGlobalConfig = (config: MaybeRef<ConfigProviderContext>, app?: App) => {
  const isSetup = !!getCurrentInstance();
  const provideFunction = app?.provide ?? (isSetup ? provide : undefined);

  if (!provideFunction) return;

  const getConfig = () => ({ ...defaultConfig, ...unref(config) });

  const messages = computed(() => {
    const { locale, localeMessages } = getConfig();
    return mergeLocale(resolveLocale(locale), localeMessages);
  });

  provideFunction(localeMessagesKey, messages);

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
    computed(() => getConfig().emptyText ?? messages.value.empty.description)
  );
};
