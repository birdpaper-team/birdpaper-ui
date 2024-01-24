<template>
  <div class="icon-page">
    <div class="icon-page-search-inner">
      <bp-input v-model="searchKey" size="large" placeholder="Search 2598 Icons" clearable></bp-input>
    </div>

    <div class="icon-page-inner">
      <template v-for="item in searchList">
        <div class="icon-item" @click="handleDetail(item)">
          <component :is="allIcons[`Icon${item}`]" size="20"></component>
          <p>{{ item }}</p>
        </div>
      </template>
    </div>
  </div>

  <icon-modal ref="iconModalRef"></icon-modal>
</template>

<script setup lang="ts" name="icon-page">
import * as allIcons from "birdpaper-icon";
import iconModal from "./components/icon-modal.vue";
import { ref, computed } from "vue";

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
  for (const key in allIcons) {
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

const iconModalRef = ref();
const handleDetail = (item: string) => {
  iconModalRef.value.open(item);
};
</script>
