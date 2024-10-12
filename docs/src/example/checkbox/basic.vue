<template>
  {{ val }}
  <bp-space>
    <bp-checkbox-group v-model="val" :max="3" @change="onChange">
      <bp-checkbox v-for="v in options" :value="v">{{ v }}</bp-checkbox>
    </bp-checkbox-group>
    <!-- <bp-checkbox v-model="val" :value="1">选项一</bp-checkbox>
    <bp-checkbox disabled v-model="val" :value="2">选项一</bp-checkbox> -->
  </bp-space>
</template>

<script setup lang="ts">
import { ref } from "vue";

const val = ref([]);
const options = ["tag1", "tag2", "tag3", "tag4", "tag5"];

const onChange = (v) => {
  console.log(v);
};
</script>
