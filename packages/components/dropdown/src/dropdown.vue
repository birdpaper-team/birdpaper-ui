<template>
  <bp-trigger
    v-model="isOpen"
    transition="fade-dropdown"
    :trigger
    :position
    :class="clsBlockName"
    :popup-offset="10"
    auto-fit-width
    update-at-scroll
  >
    <div :class="`${clsBlockName}-inner`">
      <slot />
    </div>

    <template #content>
      <ul :class="`${clsBlockName}-content select-none`">
        <slot name="content"> </slot>
      </ul>
    </template>
  </bp-trigger>
</template>

<script lang="ts" setup>
import { provide, ref } from "vue";
import { useNamespace } from "@birdpaper-ui/hooks";
import BpTrigger from "@birdpaper-ui/components/trigger/index";
import { DropdownProps, dropdownProps } from "./props";
import { DoptionValue, dropdownInjectionKey } from "./types";

defineOptions({ name: "Dropdown" });
const { clsBlockName } = useNamespace("dropdown");

const props: DropdownProps = defineProps(dropdownProps);
const emits = defineEmits<{
  (e: "select", value?: DoptionValue): void;
}>();

const isOpen = ref<boolean>(false);

provide(dropdownInjectionKey, {
  onSelect: (value?: DoptionValue) => {
    emits("select", value);
    isOpen.value = false;
  },
});

const open = () => (isOpen.value = true);
const close = () => (isOpen.value = false);

defineExpose({
  open,
  close,
});
</script>
