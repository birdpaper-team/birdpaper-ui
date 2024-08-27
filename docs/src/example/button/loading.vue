<template>
  <bp-button :loading type="plain" status="primary">加载中</bp-button>
  <bp-button :icon="IconLoader4Line" status="primary" @click="onChange">切换</bp-button>
</template>

<script lang="ts" setup>
import { IconLoader4Line } from "birdpaper-icon";
import { ref } from "vue";

const loading = ref(false);
const onChange = () => {
  loading.value = true;

  setTimeout(() => {
    loading.value = false;
  }, 3000);
};
</script>
