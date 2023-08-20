<template>
  <bp-table border :data="list">
    <template #columns>
      <bp-table-column title="书籍" data-index="name" :width="100"></bp-table-column>
      <bp-table-column title="作者" data-index="author" :width="60">
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
  {
    author: "陈年喜",
    name: "《活着就是冲天一喊》",
    remark: "“矿工诗人”陈年喜让我们看到，普通人的表达如此丰富、精彩。",
  },
  {
    author: "张嘉佳",
    name: "《从你的全世界路过》",
    remark: "本书讲述十年的起伏人生以及小说中那些人物原型在现实生活中的故事。",
  },
  {
    author: "李银河",
    name: "《煮沸人生》",
    remark: "知名学者、社会学家李银河的灵魂告白，写给所有自由、坦荡、精神明亮的年轻人。",
  },
  {
    author: "宽宽",
    name: "《36岁，人生半熟》",
    remark: "这是一个人即将步入中年时的自我反思和发现。27篇随笔篇幅短小而论述入里，有作者寻找自生生命方向之际的刹那体悟，亦是其人生哲学的阶段阐述。",
  },
];
</script>
