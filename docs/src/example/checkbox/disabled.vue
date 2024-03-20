<template>
 <bp-checkbox disabled v-model="val">Disabled option</bp-checkbox>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const val = ref(false);
</script>