<template>
  <bp-input-tag placeholder="Add a tag" v-model="val" style="width: 280px"></bp-input-tag>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const val = ref<string[]>([]);
// const val = ref<string[]>(["tag1", "tag2"]);
</script>
