<template>
  <li :class="[`${name}-item`, `${name}-total`]">
    <span class="page-text" v-text="text"></span>
  </li>
</template>

<script setup lang="ts" name="PaginationTotal">
import { ref, watchEffect } from "vue";

const props = defineProps({
  value: { type: Number, default: 0 },
  tmpString: { type: String, default: "" },
});

const name = "bp-pagination";
const paramsStr = "{total}";
const text = ref<string>("");

watchEffect(() => {
  text.value = props.tmpString.replace(paramsStr, props.value as unknown as string);
});
</script>
