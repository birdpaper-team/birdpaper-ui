<template>
  <div style="display: flex; gap: 40px">
    <div>
      <div class="label">自定义爱心图标</div>
      <bp-rate v-model="val1">
        <template #icon>
          <IconHeartFill style="color: #f53f3f" />
        </template>
      </bp-rate>
    </div>
    <div>
      <div class="label">自定义点赞图标</div>
      <bp-rate v-model="val2">
        <template #icon>
          <IconThumbUpFill style="color: #165dff" />
        </template>
      </bp-rate>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { IconHeartFill, IconThumbUpFill } from "birdpaper-icon";

const val1 = ref(3);
const val2 = ref(4);
</script>

<style scoped>
.label {
  font-size: 13px;
  color: #86909c;
  margin-bottom: 6px;
}
</style>
