<template>
  <a :class="cls" :href :disabled="isDisabled" :target>
    <span v-if="linkIcon || loading" :class="iconCls">
      <component :is="linkIcon" :class="iconInnerCls" size="14"></component>
    </span>
    <span :class="innerCls">
      <slot />
    </span>
  </a>
</template>

<script setup lang="ts">
import { useNamespace } from "@birdpaper-ui/hooks";
import { LinkProps, linkProps } from "./props";
import { IconLoaderLine, IconLoader2Line, IconLoader3Line, IconLoader4Line, IconLoader5Line } from "birdpaper-icon";
import { computed } from "vue";
import type { Component } from "vue";

defineOptions({ name: "Link" });
const { clsBlockName } = useNamespace("link");

const props: LinkProps = defineProps(linkProps);

const isDisabled = computed<boolean>(() => props.disabled || !!props.loading);

const cls = computed(() => [clsBlockName, `${clsBlockName}-${props.status}`]);
const innerCls = computed(() => [`${clsBlockName}-inner`, { "pl-1": props.loading }]);
const iconCls = computed(() => [`${clsBlockName}-icon`, props.loading ? "mr-0" : "mr-1"]);
const iconInnerCls = computed(() => [{ "bp-icon-loading": props.loading }]);

// Icons.
/** Default loading icon map. */
const loadingIcons = [IconLoaderLine, IconLoader2Line, IconLoader3Line, IconLoader4Line, IconLoader5Line];

/** Icon for link. */
const linkIcon = computed<Component>(() => {
  if (!props.loading) return props.icon;

  if (typeof props.loadingIcon === "number") return loadingIcons[props.loadingIcon - 1];
  return props.loadingIcon;
});
</script>
