<template>
  <div :class="name"><slot /></div>
</template>

<script setup lang="ts">
import { PropType, ref } from "vue";
import { buttonType } from "./types";

defineOptions({ name: "button" });
const name = "bp-button";

const props = defineProps({
  type: { type: String as PropType<buttonType>, default: "" },
});

const testFun = ref<boolean>(false);
</script>
