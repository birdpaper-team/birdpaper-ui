<template>
  <col-group :cols="headerList"></col-group>

  <thead class="bp-table-header-thead">
    <tr>
      <template v-for="item in headerList">
        <th v-if="item.type === 'checkbox'" :class="thClass(item)">
          <bp-checkbox v-model="isSelectAll" @change="onSelectChange"></bp-checkbox>
        </th>
        <th v-else :class="thClass(item)">
          {{ item.title }}
        </th>
      </template>
    </tr>
  </thead>
</template>

<script setup lang="ts" name="TableHeader">
import { PropType, ref } from "vue";
import { ColumnsItem } from "../types";
import ColGroup from "./col-group.vue";

const props = defineProps({
  headerList: { type: Array as PropType<ColumnsItem[]>, default: () => [] },
});
const emits = defineEmits<{
  (e: "on-select-all", isSelectAll: boolean): void;
}>();

const thClass = (item: any) => {
  let align = `text-${item["headerAlign"] || item["align"] || "left"}`;

  let name = ["bp-table-th", align];
  return name;
};

const isSelectAll = ref<boolean>(false);
const onSelectChange = () => {
  emits("on-select-all", isSelectAll.value);
};

defineExpose({
  isSelectAll
});
</script>
