<template>
  <div>
    <h3>Header scroll sync test</h3>
    <p>Test header/body scroll sync and column alignment</p>

    <!-- Fixed widths + horizontal scroll -->
    <h4>Fixed column widths + horizontal scroll (container 600px, table ~1000px)</h4>
    <div style="width: 600px">
      <bp-table :data="list" border row-key="id" :scroll="{ x: 1000 }" :row-selection="{ type: 'radio' }">
        <template #columns>
          <bp-table-column title="ID" data-index="id" :width="80" />
          <bp-table-column title="Name" data-index="name" :width="120" />
          <bp-table-column title="Age" data-index="age" :width="80" />
          <bp-table-column title="City" data-index="city" :width="120" />
          <bp-table-column title="Job" data-index="job" :width="200" />
          <bp-table-column title="Email" data-index="email" :width="250" />
          <bp-table-column title="Status" data-index="status" :width="100" />
        </template>
      </bp-table>
    </div>

    <!-- Fixed columns -->
    <h4>Fixed columns (ID fixed left, Status fixed right)</h4>
    <div style="width: 600px">
      <bp-table :data="bigList" border row-key="id" :scroll="{ x: 1100, y: 220 }">
        <template #columns>
          <bp-table-column title="ID" data-index="id" :width="80" fixed="left" />
          <bp-table-column title="Name" data-index="name" :width="120" />
          <bp-table-column title="Age" data-index="age" :width="80" />
          <bp-table-column title="City" data-index="city" :width="120" />
          <bp-table-column title="Job" data-index="job" :width="220" />
          <bp-table-column title="Email" data-index="email" :width="260" />
          <bp-table-column title="Phone" data-index="phone" :width="140" />
          <bp-table-column title="Status" data-index="status" :width="100" fixed="right" />
        </template>
      </bp-table>
    </div>

    <!-- Mixed widths -->
    <h4>Mixed widths (some fixed + flexible)</h4>
    <div style="width: 500px">
      <bp-table :data="list" border row-key="id" :scroll="{ x: 800 }">
        <template #columns>
          <bp-table-column title="ID" data-index="id" :width="60" />
          <bp-table-column title="Name" data-index="name" :width="100" />
          <bp-table-column title="Age" data-index="age" />
          <bp-table-column title="City" data-index="city" />
          <bp-table-column title="Job" data-index="job" :width="180" />
          <bp-table-column title="Email" data-index="email" :width="220" />
          <bp-table-column title="Status" data-index="status" />
        </template>
      </bp-table>
    </div>

    <!-- Vertical + horizontal scroll -->
    <h4>Vertical + horizontal scroll</h4>
    <div style="width: 700px">
      <bp-table :data="bigList" border row-key="id" :scroll="{ x: 900, y: 200 }" :row-selection="{ type: 'checkbox' }">
        <template #columns>
          <bp-table-column title="ID" data-index="id" :width="60" />
          <bp-table-column title="Name" data-index="name" :width="100" />
          <bp-table-column title="Age" data-index="age" :width="80" />
          <bp-table-column title="City" data-index="city" :width="120" />
          <bp-table-column title="Job" data-index="job" :width="180" />
          <bp-table-column title="Email" data-index="email" :width="200" />
          <bp-table-column title="Phone" data-index="phone" :width="120" />
          <bp-table-column title="Status" data-index="status" :width="80" />
        </template>
      </bp-table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const list = ref([
  {
    id: 1,
    name: "Zhang San",
    age: 28,
    city: "Beijing",
    job: "Frontend Engineer",
    email: "zhangsan@example.com",
    phone: "13800138001",
    status: "Active",
  },
  {
    id: 2,
    name: "Li Si",
    age: 32,
    city: "Shanghai",
    job: "Backend Engineer",
    email: "lisi@example.com",
    phone: "13800138002",
    status: "Active",
  },
  {
    id: 3,
    name: "Wang Wu",
    age: 26,
    city: "Shenzhen",
    job: "UI Designer",
    email: "wangwu@example.com",
    phone: "13800138003",
    status: "Resigned",
  },
  {
    id: 4,
    name: "Zhao Liu",
    age: 30,
    city: "Guangzhou",
    job: "Product Manager",
    email: "zhaoliu@example.com",
    phone: "13800138004",
    status: "Active",
  },
]);

// Extra rows for vertical scroll
const bigList = ref([
  ...list.value,
  ...Array.from({ length: 20 }, (_, i) => ({
    id: i + 5,
    name: `User ${i + 5}`,
    age: 25 + (i % 10),
    city: ["Beijing", "Shanghai", "Shenzhen", "Guangzhou", "Hangzhou"][i % 5],
    job: ["Software Engineer", "Designer", "Product Manager", "QA Engineer", "Operations"][i % 5],
    email: `user${i + 5}@example.com`,
    phone: `1380013800${(i + 5).toString().padStart(2, "0")}`,
    status: i % 3 === 0 ? "Resigned" : "Active",
  })),
]);
</script>

<style scoped>
h3,
h4 {
  margin: 20px 0 10px 0;
  color: #333;
}

p {
  margin: 10px 0;
  color: #666;
  font-size: 14px;
}

.bp-table {
  margin-bottom: 30px;
}

div[style*="border"] {
  margin-bottom: 20px;
  border-radius: 4px;
  background-color: #fafafa;
}
</style>
