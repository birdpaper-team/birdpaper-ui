<template>
  <div class="icon-page">
    <div class="icon-page-search-inner">
      <bp-input v-model="searchKey" size="large" placeholder="Search 2598 Icons" clearable></bp-input>
    </div>

    <div class="icon-page-inner">
      <template v-for="item in searchList">
        <div class="icon-item" @click="handleCopy(`Icon${item}`)">
          <component :is="iconList[`Icon${item}`]" size="18"></component>
          <p>{{ item }}</p>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts" name="icon-page">
import * as iconList from "birdpaper-icon";
import * as useClipboard from "vue-clipboard3/dist/esm/index";
import { Message } from "birdpaper-ui";
import { ref } from "vue";
import { computed } from "vue";

const filterName = (str: string) => {
  if (str) {
    return str.replace("Icon", "");
  }
  return "";
};

const searchKey = ref<string>("");
const iconNames = ref<string[]>([]);

iconNames.value = [];
const init = () => {
  for (const key in iconList) {
    if (key !== "default") {
      iconNames.value.push(filterName(key));
    }
  }
};

const searchList = computed<string[]>(() => {
  return iconNames.value.filter(item => {
    return item.toLocaleUpperCase().includes(searchKey.value.toLocaleUpperCase());
  });
});

init();

/** 复制到剪贴板 */
const { toClipboard } = useClipboard.default();
const handleCopy = async (item: any) => {
  try {
    const str = `<${item} />`;
    await toClipboard(str);
    Message.success(`已复制到剪贴板: ${str}`);
  } catch (err) {
    Message.error((err as Error).message);
  }
};
</script>
