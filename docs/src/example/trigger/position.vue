<template>
  <bp-space type="vertical">
    <bp-radio-group v-model="val" type="button">
      <template v-for="v in optionList">
        <bp-radio :value="v.value">{{ v.label }}</bp-radio>
      </template>
    </bp-radio-group>
    <bp-radio-group v-model="val" type="button">
      <template v-for="v in optionList2">
        <bp-radio :value="v.value">{{ v.label }}</bp-radio>
      </template>
    </bp-radio-group>

    <bp-trigger :position="val" trigger="hover">
      <bp-button>鼠标移入</bp-button>
      <template #content>
        <div class="demo">暂无内容</div>
      </template>
    </bp-trigger>
  </bp-space>
</template>

<script setup lang="ts">
import { ref } from "vue";

const val = ref("left");
const optionList = [
  { value: "left", label: "左侧" },
  { value: "top", label: "上方" },
  { value: "right", label: "右侧" },
  { value: "bottom", label: "下方" },
];
const optionList2 = [
  { value: "left-top", label: "左上" },
  { value: "left-bottom", label: "左下" },
  { value: "right-top", label: "右上" },
  { value: "right-bottom", label: "右下" },
];
</script>

<style scoped>
.demo {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 180px;
  height: 100px;
  padding: 10px;
  font-size: 13px;
  border-radius: 6px;
  border: 1px solid #f0f0f0;
  background-color: #fff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}
</style>
