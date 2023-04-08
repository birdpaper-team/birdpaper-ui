<template>
  <div>
    <bp-space>
      <bp-input v-model="name" placeholder="请输入"></bp-input>
      <bp-input v-model="name" readonly placeholder="请输入"></bp-input>
      <bp-input v-model="name" disabled placeholder="请输入"></bp-input>
      <bp-input v-model="name" is-danger placeholder="请输入"></bp-input>
    </bp-space>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

const name = ref("测试内容");

watch(()=>name.value,()=>{
  console.log('[ name.value ]-18', name.value);
});
</script>
