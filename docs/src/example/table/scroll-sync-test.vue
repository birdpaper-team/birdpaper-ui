<template>
  <div>
    <h3>表头滚动同步测试</h3>
    <p>测试表头和内容滚动同步，以及列对齐问题</p>
    
    <!-- 测试固定列宽 + 横向滚动 -->
    <h4>固定列宽 + 横向滚动（容器宽度600px，表格内容宽度约1000px）</h4>
    <div style="width: 600px; ">
      <bp-table
        :data="list"
        border
        row-key="id"
        :scroll="{ x: 1000 }"
        :row-selection="{ type: 'radio' }"
      >
        <template #columns>
          <bp-table-column title="ID" data-index="id" :width="80" />
          <bp-table-column title="姓名" data-index="name" :width="120" />
          <bp-table-column title="年龄" data-index="age" :width="80" />
          <bp-table-column title="城市" data-index="city" :width="120" />
          <bp-table-column title="职业" data-index="job" :width="200" />
          <bp-table-column title="邮箱" data-index="email" :width="250" />
          <bp-table-column title="状态" data-index="status" :width="100" />
        </template>
      </bp-table>
    </div>
    
    <!-- 测试混合宽度 -->
    <h4>混合宽度（部分固定宽度 + 自适应）</h4>
    <div style="width: 500px; ">
      <bp-table
        :data="list"
        border
        row-key="id"
        :scroll="{ x: 800 }"
      >
        <template #columns>
          <bp-table-column title="ID" data-index="id" :width="60" />
          <bp-table-column title="姓名" data-index="name" :width="100" />
          <bp-table-column title="年龄" data-index="age" />
          <bp-table-column title="城市" data-index="city" />
          <bp-table-column title="职业" data-index="job" :width="180" />
          <bp-table-column title="邮箱" data-index="email" :width="220" />
          <bp-table-column title="状态" data-index="status" />
        </template>
      </bp-table>
    </div>
    
    <!-- 测试纵向 + 横向滚动 -->
    <h4>纵向 + 横向滚动</h4>
    <div style="width: 700px; ">
      <bp-table
        :data="bigList"
        border
        row-key="id"
        :scroll="{ x: 900, y: 200 }"
        :row-selection="{ type: 'checkbox' }"
      >
        <template #columns>
          <bp-table-column title="ID" data-index="id" :width="60" />
          <bp-table-column title="姓名" data-index="name" :width="100" />
          <bp-table-column title="年龄" data-index="age" :width="80" />
          <bp-table-column title="城市" data-index="city" :width="120" />
          <bp-table-column title="职业" data-index="job" :width="180" />
          <bp-table-column title="邮箱" data-index="email" :width="200" />
          <bp-table-column title="电话" data-index="phone" :width="120" />
          <bp-table-column title="状态" data-index="status" :width="80" />
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
    name: "张三",
    age: 28,
    city: "北京",
    job: "前端开发工程师",
    email: "zhangsan@example.com",
    phone: "13800138001",
    status: "在职"
  },
  {
    id: 2,
    name: "李四",
    age: 32,
    city: "上海",
    job: "后端开发工程师", 
    email: "lisi@example.com",
    phone: "13800138002",
    status: "在职"
  },
  {
    id: 3,
    name: "王五",
    age: 26,
    city: "深圳",
    job: "UI设计师",
    email: "wangwu@example.com",
    phone: "13800138003",
    status: "离职"
  },
  {
    id: 4,
    name: "赵六",
    age: 30,
    city: "广州",
    job: "产品经理",
    email: "zhaoliu@example.com",
    phone: "13800138004",
    status: "在职"
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
    phone: `1380013800${(i + 5).toString().padStart(2, '0')}`,
    status: i % 3 === 0 ? "离职" : "在职"
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

div[style*="border"] {
  margin-bottom: 20px;
  border-radius: 4px;
  background-color: #fafafa;
}
</style>
