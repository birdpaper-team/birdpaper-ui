import { computed, inject, InjectionKey, ref, Ref, unref } from "vue";
import { localeKey, sizeKey, zIndexKey, emptyTextKey } from "./config-keys";

export const defaultNamespace: string = "bp";
export const defaultSize = "default";

export const namespaceKey: InjectionKey<Ref<string | undefined>> = Symbol("namespaceKey");

export const useGetNamespace = (namespaceOverrides?: Ref<string | undefined>) => {
  const namespace = computed(() => {
    return unref(namespaceOverrides || inject(namespaceKey, ref(defaultNamespace))) || defaultNamespace;
  });
  return namespace;
};

export const useNamespace = (componentName: string, namespaceOverrides?: Ref<string | undefined>) => {
  const namespace = useGetNamespace(namespaceOverrides);
  const clsBlockName = computed(() => `${namespace.value}-${componentName}`);
  return { namespace, clsBlockName };
};

/**
 * Consume global config injected by ConfigProvider.
 * Components use this to get global size, locale, zIndex, emptyText.
 * Each value can be overridden by component-level props.
 */
export const useGlobalConfig = () => {
  const locale = inject(localeKey, ref("zh-CN"));
  const size = inject(sizeKey, ref(defaultSize));
  const zIndex = inject(zIndexKey, ref(3000));
  const emptyText = inject(emptyTextKey, ref("暂无数据"));
  return { locale, size, zIndex, emptyText };
};
