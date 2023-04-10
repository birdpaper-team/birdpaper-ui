<template>
  <div>
    <bp-space>
      <bp-input v-model="name" clearable placeholder="请输入"></bp-input>
      <!-- <bp-input readonly placeholder="请输入"></bp-input> -->
      <!-- <bp-input disabled placeholder="请输入"></bp-input> -->
      <!-- <bp-input is-danger placeholder="请输入"></bp-input> -->
    </bp-space>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

const name = ref("等哈大家还是啥觉得还");

watch(()=>name.value,()=>{
  console.log('[ name.value ]-18', name.value);
});
</script>
