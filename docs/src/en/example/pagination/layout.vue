<template>
  <div>
    <div class="label">Custom layout</div>
    <bp-pagination :total="200" :page-size="10" v-model="current" layout="prev, pager, next" />
    <div class="label" style="margin-top: 16px">With total and jumper</div>
    <bp-pagination :total="200" :page-size="10" v-model="current" layout="total, prev, pager, next, jumper" />
    <div class="label" style="margin-top: 16px">Full layout</div>
    <bp-pagination :total="200" :page-size="10" v-model="current" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const current = ref(1);
</script>

<style scoped>
.label {
  font-size: 13px;
  color: #86909c;
  margin-bottom: 6px;
}
</style>
