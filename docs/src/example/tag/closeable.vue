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
  { label: "标签一", status: "gray" },
  { label: "标签二", status: "primary" },
  { label: "标签三", status: "success" },
  { label: "标签四", status: "warning" },
  { label: "标签五", status: "danger" },
]);

const handleClose = (item: TagItem) => {
  tags.value = tags.value.filter((t) => t !== item);
};
</script>
