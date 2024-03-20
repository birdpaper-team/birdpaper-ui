<template>
  <bp-button @click="handleOpen">Custom footer</bp-button>

  <bp-modal v-model="show" title="Title">
    <p>Modal content.</p>

    <template #footer>
      <bp-space justify="flex-end">
        <bp-button type="plain" @click="show = false">Cancle</bp-button>
        <bp-button type="primary" status="danger" @click="show = false">Confirm delete</bp-button>
      </bp-space>
    </template>
  </bp-modal>
</template>

<script setup lang="ts">
import { ref } from "vue";

const show = ref(false);

const handleOpen = () => {
  show.value = true;
};
</script>
