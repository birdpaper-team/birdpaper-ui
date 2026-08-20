<template>
  <bp-table
    :data="list"
    border
    row-key="seat"
    :row-selection="rowSelection"
    v-model:selectedKeys="selectedKeys"
    v-model:selectedKey="selectedKey"
  >
    <template #columns>
      <bp-table-column title="Seat" data-index="seat" :width="100">
        <template #cell="{ record }">
          <span style="font-weight: bold">{{ record.seat }}</span>
        </template>
      </bp-table-column>
      <bp-table-column title="Name" data-index="name" align="center" />
      <bp-table-column title="Score" data-index="results" :width="100" />
      <bp-table-column title="Class rank" data-index="ranking" :width="100" />
    </template>
  </bp-table>
</template>

<script setup lang="ts">
import { ref } from "vue";

const list = [
  { seat: "1", name: "Li Xiaoying", results: "522", ranking: "4" },
  { seat: "15", name: "Du Xiaohao", results: "462", ranking: "18" },
  { seat: "18", name: "Tang Xiaoqing", results: "482", ranking: "12" },
  { seat: "28", name: "Tian Xiaofeng", results: "475", ranking: "15" },
  { seat: "35", name: "Wu Xiaohao", results: "372", ranking: "41" },
  { seat: "41", name: "Wu Xiaoke", results: "404", ranking: "33" },
  { seat: "46", name: "Mu Xiaoyi", results: "409", ranking: "40" },
  { seat: "43", name: "Zou Xiaohui", results: "293", ranking: "53" },
];

const selectedKey = ref("");
const selectedKeys = ref([]);
const rowSelection = {
  type: "radio",
  // type: "checkbox",
};
</script>
