<template>
  <bp-radio-group v-model="val" type="button">
    <template v-for="v in optionList">
      <bp-radio :value="v">{{ v }}</bp-radio>
    </template>
  </bp-radio-group>
</template>

<script setup lang="ts">
import { ref } from "vue";

const val = ref("Recommended");
const optionList = ["Recommended", "Latest", "Hottest"];
</script>
