<template>
  <col-group :cols="headerList"></col-group>

  <thead class="bp-table-header-thead">
    <tr>
      <th v-for="(item, index) in headerList" :key="`bp-table-thead-${index}`" :class="thClass(item)">
        {{ item.title }}
      </th>
    </tr>
  </thead>
</template>

<script setup lang="ts" name="TableHeader">
import ColGroup from "./col-group.vue";

const props = defineProps({
  // TODO
  headerList: { type: Array<any>, default: () => [] },
});

// TODO
const thClass = (item: any) => {
  let align = `text-${item["headerAlign"] || item["align"] || "left"}`;

  let name = ["bp-table-th", align];
  return name;
};
</script>
