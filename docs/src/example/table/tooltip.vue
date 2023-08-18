<template>
  <bp-table border :data="list">
    <template #columns>
      <bp-table-column title="书籍" data-index="name" :width="200"></bp-table-column>
      <bp-table-column title="作者" data-index="author" :width="100">
        <template #cell="{ record }">
          <span style="font-weight: bold">{{ record.author }}</span>
        </template>
      </bp-table-column>
      <bp-table-column title="介绍" data-index="remark" ellipsis tooltip :width="100"></bp-table-column>
    </template>
  </bp-table>
</template>

<script setup lang="ts">
const list = [
  {
    author: "冯唐",
    name: "《活着活着就老了》",
    remark: "冯唐不二之作，93 篇出道封神的经典文章，用风情万种的文字，写通透性情的智慧",
  },
];
</script>
