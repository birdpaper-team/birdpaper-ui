import { computed, inject, InjectionKey, ref, Ref, unref } from "vue";

export const defaultNamespace: string = "bp";

export const namespaceKey: InjectionKey<Ref<string | undefined>> =
  Symbol("namespaceKey");

const useGetNamespace = (namespaceOverrides?: Ref<string | undefined>) => {
  const namespace = computed(() => {
    return (
      unref(
        namespaceOverrides || inject(namespaceKey, ref(defaultNamespace))
      ) || defaultNamespace
    );
  });
  return namespace;
};

export const useNamespace = (
  componentName: string,
  namespaceOverrides?: Ref<string | undefined>
) => {
  const namespace = useGetNamespace(namespaceOverrides);

  const clsBlockName = `${namespace.value}-${componentName}`;

  return {
    namespace,
    clsBlockName,
  };
};
