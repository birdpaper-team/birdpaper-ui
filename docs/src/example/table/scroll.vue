<template>
  <div>
    <h3>横向滚动示例</h3>
    <p>当列数较多时，表格会自动启用横向滚动，确保每列都有适当的宽度显示</p>
    
    <!-- 无滚动限制 - 自动计算 -->
    <h4>自动横向滚动（无限制）</h4>
    <bp-table
      :data="list"
      border
      row-key="id"
      style="width: 800px;"
    >
      <template #columns>
        <bp-table-column title="ID" data-index="id" :width="80" />
        <bp-table-column title="姓名" data-index="name" :width="120" />
        <bp-table-column title="年龄" data-index="age" :width="80" />
        <bp-table-column title="城市" data-index="city" :width="120" />
        <bp-table-column title="职业" data-index="job" :width="150" />
        <bp-table-column title="邮箱" data-index="email" :width="200" />
        <bp-table-column title="电话" data-index="phone" :width="150" />
        <bp-table-column title="地址" data-index="address" :width="250" />
        <bp-table-column title="公司" data-index="company" :width="180" />
        <bp-table-column title="薪资" data-index="salary" :width="120" />
      </template>
    </bp-table>

    <!-- 指定横向滚动宽度 -->
    <h4>指定横向滚动宽度（1200px）</h4>
    <bp-table
      :data="list"
      border
      row-key="id"
      :scroll="{ x: 1200 }"
      style="width: 600px;"
    >
      <template #columns>
        <bp-table-column title="ID" data-index="id" :width="80" />
        <bp-table-column title="姓名" data-index="name" :width="120" />
        <bp-table-column title="年龄" data-index="age" :width="80" />
        <bp-table-column title="城市" data-index="city" :width="120" />
        <bp-table-column title="职业" data-index="job" :width="150" />
        <bp-table-column title="邮箱" data-index="email" :width="200" />
        <bp-table-column title="电话" data-index="phone" :width="150" />
        <bp-table-column title="地址" data-index="address" :width="250" />
        <bp-table-column title="公司" data-index="company" :width="180" />
        <bp-table-column title="薪资" data-index="salary" :width="120" />
      </template>
    </bp-table>

    <!-- 同时设置横向和纵向滚动 -->
    <h4>横向 + 纵向滚动</h4>
    <bp-table
      :data="bigList"
      border
      row-key="id"
      :scroll="{ x: 1000, y: 300 }"
      style="width: 700px;"
    >
      <template #columns>
        <bp-table-column title="ID" data-index="id" :width="80" />
        <bp-table-column title="姓名" data-index="name" :width="120" />
        <bp-table-column title="年龄" data-index="age" :width="80" />
        <bp-table-column title="城市" data-index="city" :width="120" />
        <bp-table-column title="职业" data-index="job" :width="150" />
        <bp-table-column title="邮箱" data-index="email" :width="200" />
        <bp-table-column title="电话" data-index="phone" :width="150" />
        <bp-table-column title="地址" data-index="address" :width="250" />
      </template>
    </bp-table>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const list = ref([
  {
    id: 1,
    name: "张三",
    age: 28,
    city: "北京",
    job: "前端开发工程师",
    email: "zhangsan@example.com",
    phone: "13800138001",
    address: "北京市朝阳区建国门外大街1号",
    company: "科技有限公司",
    salary: "15000"
  },
  {
    id: 2,
    name: "李四",
    age: 32,
    city: "上海",
    job: "后端开发工程师",
    email: "lisi@example.com",
    phone: "13800138002",
    address: "上海市浦东新区世纪大道100号",
    company: "互联网公司",
    salary: "18000"
  },
  {
    id: 3,
    name: "王五",
    age: 26,
    city: "深圳",
    job: "UI设计师",
    email: "wangwu@example.com",
    phone: "13800138003",
    address: "深圳市南山区科技园南区",
    company: "设计工作室",
    salary: "12000"
  },
  {
    id: 4,
    name: "赵六",
    age: 30,
    city: "广州",
    job: "产品经理",
    email: "zhaoliu@example.com",
    phone: "13800138004",
    address: "广州市天河区珠江新城",
    company: "创业公司",
    salary: "20000"
  }
]);

// 生成更多数据用于测试纵向滚动
const bigList = ref([
  ...list.value,
  ...Array.from({ length: 20 }, (_, i) => ({
    id: i + 5,
    name: `用户${i + 5}`,
    age: 25 + (i % 10),
    city: ["北京", "上海", "深圳", "广州", "杭州"][i % 5],
    job: ["开发工程师", "设计师", "产品经理", "测试工程师", "运营"][i % 5],
    email: `user${i + 5}@example.com`,
    phone: `1380013800${i + 5}`,
    address: `地址${i + 5}号`,
    company: `公司${i + 5}`,
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
