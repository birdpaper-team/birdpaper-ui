<template>
  <bp-trigger
    v-model="isFocus"
    transition="fade-dropdown"
    :class="clsBlockName"
    :disabled="disabled"
    :popup-offset="10"
    auto-fit-width
    update-at-scroll
  >
    <bp-input ref="inpRef" :disabled="disabled" v-model="model" readonly :placeholder="placeholder"></bp-input>
  </bp-trigger>
</template>

<script setup lang="ts">
import { useNamespace } from "@birdpaper-ui/hooks";
import { SelectProps, selectProps } from "./props";
import { SelectValue } from "./types";
import BpInput from "@birdpaper-ui/components/input/index";
import { ref } from "vue";

defineOptions({ name: "Select" });
const { clsBlockName } = useNamespace("select");

const model = defineModel<SelectValue>({ default: "" });
const props: SelectProps = defineProps(selectProps);

const isFocus = ref<boolean>(false);
</script>
