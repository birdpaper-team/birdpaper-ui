<template>
  <div>
    <bp-space>
      <bp-input v-model="name" :size="size" placeholder="请输入"></bp-input>
      <bp-input v-model="name" :size="size" readonly placeholder="请输入"></bp-input>
      <bp-input v-model="name" :size="size" disabled placeholder="请输入"></bp-input>
      <bp-input v-model="name" :size="size" is-danger placeholder="请输入"></bp-input>
    </bp-space>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

const name = ref("测试内容");
const size = ref("small");

setTimeout(() => {
  name.value = "123456"
}, 1000);

watch(()=>name.value,()=>{
  console.log('[ name.value ]-18', name.value);
});
</script>
