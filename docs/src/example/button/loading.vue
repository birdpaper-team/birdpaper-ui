<template>
  <bp-button :loading type="plain" status="primary">{{ loading ? "保存中" : "保存" }}</bp-button>
  <!-- <bp-button :loading :icon="IconExchange2Line" type="plain" shape="circle" status="primary"></bp-button> -->
  <bp-button status="primary" @click="onChange">切换</bp-button>
</template>

<script lang="ts" setup>
// import { IconExchange2Line } from "birdpaper-icon";
import { ref } from "vue";

const loading = ref(false);
const onChange = () => {
  loading.value = !loading.value;
};
</script>
