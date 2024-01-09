<template>
  <div :class="name">
    <code>birdpaper-ui</code> 遵循 Semver 语义化版本规范。如果你想了解该项目的开发计划，可以访问
    <bp-link @click="handleClick">产品计划</bp-link>。

    <div :class="`${name}-option`">
      <bp-select v-model="currentMinor" placeholder="请选择" :style="{ width: '120px' }">
        <bp-option v-for="v in minorVersionList" :value="v">{{ v }}</bp-option>
      </bp-select>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { eventTrack, goToLink } from "../util/helper";
import { minorVersionList } from "./minor-version";
import { watch } from "vue";

const props = defineProps({
  modelValue: { type: String, default: "" },
});
const emits = defineEmits<{
  (e: "update:modelValue", val: string): void;
}>();

const name = "changelog-page";
const currentMinor = ref(minorVersionList[0]);

watch(
  () => currentMinor.value,
  () => {
    emits("update:modelValue", currentMinor.value);
  },
  {
    immediate: true,
  }
);

const handleClick = () => {
  const url = "https://birdpaper.feishu.cn/base/XuwfbzYJZaXsQ4shv6rcl1J4nNb";

  eventTrack("feishu_product_plan");
  return goToLink(url);
};
</script>
