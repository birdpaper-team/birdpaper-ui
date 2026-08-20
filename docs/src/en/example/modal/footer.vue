<template>
  <bp-button @click="handleOpen">Custom footer</bp-button>

  <bp-modal v-model="show" title="Title">
    <p>Dialog content.</p>

    <template #footer>
      <bp-button type="secondary" @click="show = false">Cancel</bp-button>
      <bp-button type="secondary" status="danger" @click="show = false">Confirm delete</bp-button>
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
