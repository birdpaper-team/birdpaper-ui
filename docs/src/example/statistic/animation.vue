<template>
  <div>
    <bp-button size="small" type="plain" @click="restart" style="margin-bottom: 20px">重新播放</bp-button>
    <div style="display: flex; gap: 40px">
      <div>
        <div class="label">从 0 动画到目标值</div>
        <bp-statistic v-model="value" animation :duration="2000" :precision="2" unit="万" />
      </div>
      <div>
        <div class="label">自定义起始值</div>
        <bp-statistic v-model="value" animation :value-from="500" :duration="1500" show-separator />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const value = ref(8888.88);

const restart = () => {
  value.value = 0;
  setTimeout(() => {
    value.value = 8888.88;
  }, 100);
};
</script>

<style scoped>
.label {
  font-size: 13px;
  color: #86909c;
  margin-bottom: 8px;
}
</style>
