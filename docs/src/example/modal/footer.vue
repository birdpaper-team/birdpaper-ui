<template>
  <bp-button @click="handleOpen">自定义底部</bp-button>

  <bp-modal v-model="show" title="标题">
    <p>对话框内容。</p>

    <template #footer>
      <bp-button type="secondary" @click="show = false">取消</bp-button>
      <bp-button type="secondary" status="danger" @click="show = false">确认删除</bp-button>
    </template>
  </bp-modal>
</template>

<script setup lang="ts">
import { ref } from "vue";

const show = ref(false);

const handleOpen = () => {
  show.value = true;
};
</script>
