<template>
  <bp-spin :loading="loading">
    <div class="bp-table" ref="bpTable">
      <div :class="innerClass">
        <div class="bp-table-body-area" :style="bodyAreaStyle">
          <div class="scrollbar"></div>

          <table class="bp-table-body" :style="`width:${table_width}px`">
            <table-header ref="tableHeaderRef" :header-list="columns" @on-select-all="onSelectAll"></table-header>

            <table-empty v-if="isEmpty" :colspan="columns.length"></table-empty>

            <table-body
              v-else-if="!isEmpty && slots.columns"
              v-model="selectedData"
              :data="data"
              :selection="selection"
              :row-key="rowKey"
              @change="onSelectChange"
            >
              <slot name="columns"> </slot>
            </table-body>

            <!-- TODO 后续版本考虑弃用这种模式 -->
            <tbody class="bp-table-body-tbody" v-else>
              <tr v-for="(item, index) in data" :key="`bp-table-tbody-tr-${index}`">
                <td v-for="(v, k) in columns" :key="`bp-table-tbody-td-${index}-${k}`" :class="tdClass(v)">
                  <table-select
                    v-if="['radio', 'checkbox'].includes(v.type)"
                    v-model="selectedData"
                    :type="v.type"
                    :record="item"
                    :value="item[rowKey]"
                    @change="onSelectChange"
                  ></table-select>
                  <!-- 文本和自定义列 -->
                  <span class="bp-table-td-content" v-else>
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
import { PropType, computed, ref, watch } from "vue";
import { useTable } from "./table";
import TableHeader from "./components/table-header.vue";
import TableBody from "./components/table-body";
import TableEmpty from "./components/empty.vue";
import TableSelect from "./components/table-select.vue";
import bpSpin from "../../spin/index";
import { defineComponent } from "vue";
import { ColumnsItem, SelectedValue, SelectionConfig } from "./types";
import { useTableSelect } from "./table-select";

export default defineComponent({
  name: "Table",
  components: { TableHeader, TableEmpty, TableBody, TableSelect, bpSpin },
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
    /** 行 Key 字段名称 */
    rowKey: { type: String },
    /** 选择器配置 */
    selection: { type: Object as PropType<SelectionConfig> },
    /** 选择数据的Key */
    selectedKey: { type: Array as PropType<SelectedValue>, default: () => [] },
  },
  emits: ["update:selectedKey", "selection-change", "select-all", "select"],
  setup(props, { slots, emit }) {
    const tableHeaderRef = ref();
    let { bpTable, columns, table_width } = useTable(props, slots, emit);
    let { selectedData, onSelectChange, onSelectAll } = useTableSelect(props, emit, tableHeaderRef);

    const isEmpty = computed(() => props.data.length === 0);
    const hasBorder = computed(() => props.border);
    const isStripe = computed(() => props.stripe);
    const fixedHeight = computed(() => props.height);

    watch(
      () => props.selectedKey,
      () => {
        selectedData.value = props.selectedKey;
      },
      { immediate: true }
    );

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

    const tdClass = (v: any) => {
      let align = `text-${v["align"] || "left"}`;

      let name = ["bp-table-td", align];
      return name;
    };

    return {
      slots,
      bpTable,
      tableHeaderRef,
      columns,
      table_width,
      isEmpty,
      selectedData,
      bodyAreaStyle,
      innerClass,
      tdClass,
      onSelectChange,
      onSelectAll,
    };
  },
});
</script>
