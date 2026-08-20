<template>
  <div>
    <h3>Horizontal scroll example</h3>
    <p>With many columns, the table enables horizontal scroll so each column keeps a proper width</p>
    
    <!-- No scroll limit - auto -->
    <h4>Auto horizontal scroll (unlimited)</h4>
    <bp-table
      :data="list"
      border
      row-key="id"
      style="width: 800px;"
    >
      <template #columns>
        <bp-table-column title="ID" data-index="id" :width="80" />
        <bp-table-column title="Name" data-index="name" :width="120" />
        <bp-table-column title="Age" data-index="age" :width="80" />
        <bp-table-column title="City" data-index="city" :width="120" />
        <bp-table-column title="Job" data-index="job" :width="150" />
        <bp-table-column title="Email" data-index="email" :width="200" />
        <bp-table-column title="Phone" data-index="phone" :width="150" />
        <bp-table-column title="Address" data-index="address" :width="250" />
        <bp-table-column title="Company" data-index="company" :width="180" />
        <bp-table-column title="Salary" data-index="salary" :width="120" />
      </template>
    </bp-table>

    <!-- Explicit horizontal scroll width -->
    <h4>Explicit horizontal scroll width (1200px)</h4>
    <bp-table
      :data="list"
      border
      row-key="id"
      :scroll="{ x: 1200 }"
      style="width: 600px;"
    >
      <template #columns>
        <bp-table-column title="ID" data-index="id" :width="80" />
        <bp-table-column title="Name" data-index="name" :width="120" />
        <bp-table-column title="Age" data-index="age" :width="80" />
        <bp-table-column title="City" data-index="city" :width="120" />
        <bp-table-column title="Job" data-index="job" :width="150" />
        <bp-table-column title="Email" data-index="email" :width="200" />
        <bp-table-column title="Phone" data-index="phone" :width="150" />
        <bp-table-column title="Address" data-index="address" :width="250" />
        <bp-table-column title="Company" data-index="company" :width="180" />
        <bp-table-column title="Salary" data-index="salary" :width="120" />
      </template>
    </bp-table>

    <!-- Horizontal and vertical scroll -->
    <h4>Horizontal + vertical scroll</h4>
    <bp-table
      :data="bigList"
      border
      row-key="id"
      :scroll="{ x: 1000, y: 300 }"
      style="width: 700px;"
    >
      <template #columns>
        <bp-table-column title="ID" data-index="id" :width="80" />
        <bp-table-column title="Name" data-index="name" :width="120" />
        <bp-table-column title="Age" data-index="age" :width="80" />
        <bp-table-column title="City" data-index="city" :width="120" />
        <bp-table-column title="Job" data-index="job" :width="150" />
        <bp-table-column title="Email" data-index="email" :width="200" />
        <bp-table-column title="Phone" data-index="phone" :width="150" />
        <bp-table-column title="Address" data-index="address" :width="250" />
      </template>
    </bp-table>
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
    address: "1 Jianguomenwai Ave, Chaoyang, Beijing",
    company: "Tech Co., Ltd.",
    salary: "15000"
  },
  {
    id: 2,
    name: "Li Si",
    age: 32,
    city: "Shanghai",
    job: "Backend Engineer",
    email: "lisi@example.com",
    phone: "13800138002",
    address: "100 Century Avenue, Pudong, Shanghai",
    company: "Internet Company",
    salary: "18000"
  },
  {
    id: 3,
    name: "Wang Wu",
    age: 26,
    city: "Shenzhen",
    job: "UI Designer",
    email: "wangwu@example.com",
    phone: "13800138003",
    address: "South Science Park, Nanshan, Shenzhen",
    company: "Design Studio",
    salary: "12000"
  },
  {
    id: 4,
    name: "Zhao Liu",
    age: 30,
    city: "Guangzhou",
    job: "Product Manager",
    email: "zhaoliu@example.com",
    phone: "13800138004",
    address: "Zhujiang New Town, Tianhe, Guangzhou",
    company: "Startup",
    salary: "20000"
  }
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
    phone: `1380013800${i + 5}`,
    address: `Address ${i + 5}`,
    company: `Company ${i + 5}`,
    salary: `${10000 + i * 1000}`
  }))
]);
</script>

<style scoped>
h3, h4 {
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
</style>
