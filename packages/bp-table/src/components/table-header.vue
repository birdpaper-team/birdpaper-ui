<template>
  <table class="bp-table-header" :style="`width:${width}px`">
    <col-group :cols="headerList"></col-group>

    <thead class="bp-table-header-thead">
      <tr>
        <th
          v-for="(item, index) in headerList"
          :key="`bp-table-thead-${index}`"
          :class="thClass(item)"
        >{{ item.label }}</th>
      </tr>
    </thead>
  </table>
</template>

<script setup>
import { defineProps } from 'vue';
import ColGroup from "./col-group.vue";

const props = defineProps({
  headerList: { type: Array, default: () => [] },
  width: { type: [String, Number], default: "" }
});

const thClass = (item) => {
  let align = `text-${item['headerAlign'] || item['align'] || 'left'}`;

  let name = [align];
  return name;
}
</script>

<script>
export default { name: "bp-table-header" }
</script>