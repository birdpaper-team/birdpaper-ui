<template>
  <bp-input v-model="txt" clearable size="default" style="width: 220px;margin-bottom: 16px;" placeholder="请输入内容"></bp-input>
  <bp-input v-model="txt" type="password" clearable size="default" style="width: 220px;margin-bottom: 16px;" placeholder="请输入内容"></bp-input>
  <bp-input v-model="txt" :maxlength="10" show-limit clearable size="default" style="width: 220px;margin-bottom: 16px;" placeholder="请输入内容">
    <template #suffix>
      <!-- RMB -->
      <IconQrScan2Line  />
    </template>
  </bp-input>
  <bp-input v-model="txt" :maxlength="10" show-limit clearable size="default" style="width: 220px;margin-bottom: 16px;" placeholder="请输入内容">
  </bp-input>
  <bp-input v-model="txt" :maxlength="10" show-limit clearable size="default" style="width: 220px;margin-bottom: 16px;" placeholder="请输入内容">
    <template #perfix>
      <IconMoneyDollarCircleLine  />
    </template>
    <template #suffix>
      RMB
    </template>
  </bp-input>
</template>

<script setup lang="ts">
import { ref } from "vue";

const txt = ref("");
</script>
