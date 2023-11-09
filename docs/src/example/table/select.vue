<template>
  <bp-table row-key="seat" :selection="selection" border :data="list" v-model:selected-key="keys">
    <template #columns>
      <bp-table-column title="座号" data-index="seat" width="100"></bp-table-column>
      <bp-table-column title="姓名" data-index="name"></bp-table-column>
      <bp-table-column title="成绩" data-index="results"></bp-table-column>
      <bp-table-column title="班级排名" data-index="ranking"></bp-table-column>
    </template>
  </bp-table>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const list = [
  { seat: "1", name: "李小颖", results: "522", ranking: "4" },
  { seat: "15", name: "杜小浩", results: "462", ranking: "18" },
  { seat: "43", name: "邹小辉", results: "293", ranking: "53" },
];

const selection = {
  type: "checkbox",
};

const keys = ref([]);
</script>
