<template>
 <bp-checkbox disabled v-model="val">禁用选项</bp-checkbox>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const val = ref(false);
</script>