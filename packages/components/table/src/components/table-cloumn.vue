<template>
  <div>
    <slot name="cell" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TableColumn",
  props: {
    title: { type: String },
    key: { type: String },
  },
  setup(props, { slots }) {},
});
</script>
