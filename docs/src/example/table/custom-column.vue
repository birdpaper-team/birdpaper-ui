<template>
  <bp-table border :data="list">
    <template #columns>
      <bp-table-column title="座号" data-index="seat" :width="100">
        <template #cell="{ record }">
          <span style="font-weight: bold">{{ record.seat }}</span>
        </template>
      </bp-table-column>
      <bp-table-column title="姓名" data-index="name">
        <template #cell="{ record }">
          <bp-button size="small" status="primary">{{ record.name }}</bp-button>
        </template>
      </bp-table-column>
      <bp-table-column title="成绩" data-index="results" />
      <bp-table-column title="班级排名" data-index="ranking" />
      <bp-table-column title="操作">
        <template #cell>
          <bp-link status="danger">删除</bp-link>
        </template>
      </bp-table-column>
    </template>
  </bp-table>
</template>

<script setup lang="ts">
const list = [
  { seat: "28", name: "田小锋", results: "475", ranking: "15" },
  { seat: "35", name: "吴小豪", results: "372", ranking: "41" },
  { seat: "41", name: "吴小可", results: "404", ranking: "33" },
  { seat: "46", name: "木小亦", results: "409", ranking: "40" },
  { seat: "43", name: "邹小辉", results: "293", ranking: "53" },
];
</script>
