<template>
  <div :class="`${clsBlockName}`">
    <div :class="`${clsBlockName}-image`">
      <div v-if="!slots.image?.({})">
        <IconInbox2Line size="28" />
      </div>
      <slot name="image" />
    </div>
    
    <div :class="`${clsBlockName}-content`">
      {{ displayContent }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { useNamespace, useGlobalConfig } from "@birdpaper-ui/hooks";
import { emptyProps, EmptyProps } from "./props";
import { computed, useSlots } from "vue";
import { IconInbox2Line } from "birdpaper-icon";

defineOptions({ name: "Empty" });
const { clsBlockName } = useNamespace("empty");
const { emptyText } = useGlobalConfig();

const props: EmptyProps = defineProps(emptyProps);
const slots = useSlots();

const displayContent = computed(() => props.content ?? emptyText.value);
</script>
