<template>
  <div class="bp-page-total">
    <p class="page-text" v-text="text"></p>
  </div>
</template>

<script setup>
import { defineProps, ref, watchEffect } from "vue";

const props = defineProps({
  value: { type: Number, default: 0 },
  tmpString: { type: String, default: "" },
});

const paramsStr = "{total}";
const text = ref("");

watchEffect(() => {
  text.value = props.tmpString.replace(paramsStr, props.value);
});
</script>

<script>
export default { name: "bp-pagination-total" };
</script>
