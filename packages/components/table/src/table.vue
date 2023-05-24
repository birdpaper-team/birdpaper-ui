<template>
  <div class="bp-table" ref="bpTable">
    <div :class="innerClass">
      <table-header :header-list="columns" :width="_table_width"></table-header>

      <div class="bp-table-body-area" :style="bodyAreaStyle">
        <div class="scrollbar"></div>

        <table class="bp-table-body" :style="`width:${_table_width}px`">
          <col-group :cols="columns"></col-group>

          <tbody class="bp-table-body-tbody">
            <table-empty v-if="isEmpty" :colspan="columns.length"></table-empty>

            <template v-else>
              <tr v-for="(item, index) in dataSource" :key="`bp-table-tbody-tr-${index}`">
                <td v-for="(v, k) in columns" :key="`bp-table-tbody-td-${index}-${k}`" :class="tdClass(v)">
                  <template v-if="!v.scope">{{ item[v.key] }}</template>
                  <slot v-else :name="v.scope.customRender" :row="item" :index="index" :data="item[v.key]"></slot>
                </td>
              </tr>
            </template>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" name="Table">
import { computed } from "vue";
import { useTable } from "./table";
import TableHeader from "./components/table-header.vue";
import TableEmpty from "./components/empty.vue";
import ColGroup from "./components/col-group.vue";

const props = defineProps({
  /* 表格头部列表 Table header list */
  cols: { type: Array, default: () => [] },
  /* 表格数据 Table data source */
  dataSource: { type: Array, default: () => [] },
  /* 固定高度 Fixed height */
  height: { type: String, default: "" },
  /* 加载状态 loading or not */
  loading: { type: Boolean, default: false },
  /* 展示边框 Bordered or not */
  border: { type: Boolean, default: false },
  /* 斑马纹 Stripe or not */
  stripe: { type: Boolean, default: false },
});

const { bpTable, columns, _table_width } = useTable(props);

const isEmpty = computed(() => props.dataSource.length === 0);
const hasBorder = computed(() => props.border);
const isStripe = computed(() => props.stripe);
const fixedHeight = computed(() => props.height);

const bodyAreaStyle = computed(() => {
  if (props.height) {
    return `width:${_table_width.value}px;max-height:${props.height}px;height:${props.height}px;overflow-y:auto`;
  }
  return `width:${_table_width.value}px`;
});

const innerClass = computed(() => {
  let name = [
    "bp-table-inner",
    { "bp-table-border": hasBorder.value },
    { "bp-table-stripe": isStripe.value },
    { "bp-table-fixed-header": fixedHeight.value },
  ];
  return name;
});

// TODO
const tdClass = (v: any) => {
  let align = `text-${v["align"] || "left"}`;

  let name = [align];
  return name;
};
</script>
