<template>
  <bp-pagination
    v-model:current="page"
    :total="30"
    prev-text="上一页"
    next-text="下一页"
    layout="total, prev, pager, next, jumper"
  >
  </bp-pagination>
</template>

<script setup lang="ts">
import { ref } from "vue";

const page = ref(1);
</script>
