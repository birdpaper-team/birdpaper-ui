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
      <bp-button>Hover me</bp-button>
      <template #content>
        <div class="demo">
          <bp-empty description="No content."></bp-empty>
        </div>
      </template>
    </bp-trigger>
  </bp-space>
</template>

<script setup lang="ts">
import { ref } from "vue";

const val = ref("left");
const optionList = [
  { value: "left", label: "Left" },
  { value: "top", label: "Top" },
  { value: "right", label: "Right" },
  { value: "bottom", label: "Bottom" },
];
const optionList2 = [
  { value: "left-top", label: "Left-Top" },
  { value: "left-bottom", label: "Left-Bottom" },
  { value: "right-top", label: "Right-Top" },
  { value: "right-bottom", label: "Right-Bottom" },
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
