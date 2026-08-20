<template>
  <bp-space>
    <bp-tag v-for="item in tags" :key="item" :status="item.status" closeable @close="handleClose(item)">
      {{ item.label }}
    </bp-tag>
  </bp-space>
</template>

<script setup lang="ts">
import { ref } from "vue";

interface TagItem {
  label: string;
  status: string;
}

const tags = ref<TagItem[]>([
  { label: "Tag 1", status: "gray" },
  { label: "Tag 2", status: "primary" },
  { label: "Tag 3", status: "success" },
  { label: "Tag 4", status: "warning" },
  { label: "Tag 5", status: "danger" },
]);

const handleClose = (item: TagItem) => {
  tags.value = tags.value.filter((t) => t !== item);
};
</script>
