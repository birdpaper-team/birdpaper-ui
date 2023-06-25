<template>
  <bp-table border :cols="cols" :data="list"> </bp-table>
</template>

<script setup lang="ts">
const list = [
  { seat: "1", name: "李小颖", results: "522", ranking: "4" },
  { seat: "15", name: "杜小浩", results: "462", ranking: "18" },
  { seat: "18", name: "汤小青", results: "482", ranking: "12" },
  { seat: "28", name: "田小锋", results: "475", ranking: "15" },
  { seat: "35", name: "吴小豪", results: "372", ranking: "41" },
  { seat: "41", name: "吴小可", results: "404", ranking: "33" },
  { seat: "46", name: "木小亦", results: "409", ranking: "40" },
  { seat: "43", name: "邹小辉", results: "293", ranking: "53" },
];
const cols = [
  { label: "座号", key: "seat", width: 100 },
  { label: "姓名", key: "name" },
  { label: "成绩", key: "results" },
  { label: "班级排名", key: "ranking" },
];
</script>
