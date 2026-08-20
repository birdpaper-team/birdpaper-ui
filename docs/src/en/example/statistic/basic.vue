<template>
  <bp-button size="small" type="plain" @click="random" style="margin-bottom: 20px">Toggle</bp-button>

  <bp-statistic v-model="value" animation :precision="2" :font-size="['26px', '26px']"> </bp-statistic>
</template>

<script setup lang="ts">
import { ref } from "vue";

const value = ref(100.91);

const random = () => {
  value.value = (Math.floor(Math.random() * 9999999) + 1) / 100;
};
</script>
