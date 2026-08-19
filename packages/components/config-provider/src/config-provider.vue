<template>
  <slot />
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { provideGlobalConfig } from "./use-config-provider";
import type { ConfigProviderContext } from "./types";

defineOptions({ name: "ConfigProvider" });

const props = withDefaults(
  defineProps<{
    prefix?: string;
    namespace?: string;
    locale?: string;
    size?: ConfigProviderContext["size"];
    zIndex?: number;
    emptyText?: string;
  }>(),
  {}
);

const config = computed<ConfigProviderContext>(() => {
  const next: ConfigProviderContext = {};
  if (props.prefix !== undefined) next.prefix = props.prefix;
  if (props.namespace !== undefined) next.namespace = props.namespace;
  if (props.locale !== undefined) next.locale = props.locale;
  if (props.size !== undefined) next.size = props.size;
  if (props.zIndex !== undefined) next.zIndex = props.zIndex;
  if (props.emptyText !== undefined) next.emptyText = props.emptyText;
  return next;
});

provideGlobalConfig(config);
</script>
