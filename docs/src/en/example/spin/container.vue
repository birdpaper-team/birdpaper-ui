<template>
  <div>
    <bp-space :size="16" style="margin-bottom: 16px">
      <bp-button @click="loading = !loading">Toggle loading</bp-button>
    </bp-space>
    <bp-spin :spinning="loading" description="Loading data...">
      <div class="content-box">
        <p>Some content area</p>
        <p>The Spin component shows a loading overlay on top of this content</p>
        <p>Click the button above to toggle loading</p>
      </div>
    </bp-spin>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const loading = ref(true);
</script>

<style lang="scss" scoped>
.content-box {
  padding: 24px;
  border: 1px solid #e5e5e5;
  border-radius: 8px;

  p {
    margin: 0;
    line-height: 2;
    font-size: 13px;
    color: #595959;
  }
}
</style>
