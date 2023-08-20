<template>
  <bp-spin :loading="loading">
    <div class="bp-table" ref="bpTable">
      <div :class="innerClass">
        <div class="bp-table-body-area" :style="bodyAreaStyle">
          <div class="scrollbar"></div>

          <table class="bp-table-body" :style="`width:${table_width}px`">
            <table-header :header-list="columns"></table-header>

            <table-empty v-if="isEmpty" :colspan="columns.length"></table-empty>

            <table-body v-else-if="!isEmpty && slots.columns" :data="data">
              <slot name="columns"> </slot>
            </table-body>

            <tbody class="bp-table-body-tbody" v-else>
              <tr v-for="(item, index) in data" :key="`bp-table-tbody-tr-${index}`">
                <td v-for="(v, k) in columns" :key="`bp-table-tbody-td-${index}-${k}`" :class="tdClass(v)">
                  <span class="bp-table-td-content">
                    <template v-if="!v.scope">
                      <span>{{ item[v.dataIndex] }}</span>
                    </template>
                    <slot
                      v-else
                      :name="v.scope.customRender"
                      :row="item"
                      :index="index"
                      :data="item[v.dataIndex]"
                    ></slot>
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </bp-spin>
</template>

<script lang="ts">
import { PropType, computed } from "vue";
import { useTable } from "./table";
import TableHeader from "./components/table-header.vue";
import TableBody from "./components/table-body";
import TableEmpty from "./components/empty.vue";
import bpSpin from "../../spin/index";
import { defineComponent } from "vue";
import { ColumnsItem } from "./types";

export default defineComponent({
  name: "Table",
  components: { TableHeader, TableEmpty, TableBody, bpSpin },
  props: {
    /* 表格头部列表 Table header list */
    cols: { type: Array as PropType<ColumnsItem[]>, default: () => [] },
    /* 表格数据 Table data source */
    data: { type: Array, default: () => [] },
    /* 固定高度 Fixed height */
    height: { type: String, default: "" },
    /* 加载状态 loading or not */
    loading: { type: Boolean, default: false },
    /* 展示边框 Bordered or not */
    border: { type: Boolean, default: false },
    /* 斑马纹 Stripe or not */
    stripe: { type: Boolean, default: false },
  },
  setup(props, { slots }) {
    const { bpTable, columns, table_width } = useTable(props, slots);

    const isEmpty = computed(() => props.data.length === 0);
    const hasBorder = computed(() => props.border);
    const isStripe = computed(() => props.stripe);
    const fixedHeight = computed(() => props.height);

    const bodyAreaStyle = computed(() => {
      if (props.height) {
        return `width:${table_width.value}px;max-height:${props.height}px;height:${props.height}px;overflow-y:auto`;
      }
      return `width:${table_width.value}px`;
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

      let name = ["bp-table-td", align];
      return name;
    };

    return {
      slots,
      bpTable,
      columns,
      table_width,
      isEmpty,
      bodyAreaStyle,
      innerClass,
      tdClass,
    };
  },
});
</script>
