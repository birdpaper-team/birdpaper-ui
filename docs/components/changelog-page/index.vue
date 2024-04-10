<template>
  <div :class="name">
    <div :class="`${name}-option`">
      <h1 :class="`${name}-title`">更新日志</h1>
      <bp-select v-model="currentMinor" placeholder="请选择" :style="{ width: '120px' }" @change="onChange">
        <bp-option v-for="v in minorVersionList" :value="v.value">{{ v.label }}</bp-option>
      </bp-select>
    </div>

    <code>birdpaper-ui</code> 遵循 Semver 语义化版本规范。如果你想了解该项目的开发计划，可以访问
    <bp-link @click="handleClick">产品计划</bp-link>
    。
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { eventTrack, goToLink } from "../util/helper";
import { minorVersionList } from "./minor-version";
import { useRoute, useRouter } from "vitepress";

const props = defineProps({
  modelValue: { type: String, default: "" },
});
const emits = defineEmits<{
  (e: "update:modelValue", val: string): void;
}>();

const route = useRoute();
const router = useRouter();
const name = "changelog-page";
const currentMinor = ref<string>(route.path.split('/')[3] || minorVersionList[0].value);

const onChange = (v: string) => {
  router.go(`/guide/changelog/${v}`);
}

const handleClick = () => {
  const url = "https://birdpaper.feishu.cn/base/XuwfbzYJZaXsQ4shv6rcl1J4nNb";

  eventTrack("feishu_product_plan");
  return goToLink(url);
};
</script>
