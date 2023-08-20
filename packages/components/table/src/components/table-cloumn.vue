<template>
  <td :class="tdClass">
    <span class="bp-table-td-content">
      <template v-if="!hasCustomCell">
        <bp-tooltip :content="record[dataIndex]" v-if="tooltip">
          <span class="text-ellipsis">
            {{ record[dataIndex] }}
          </span>
        </bp-tooltip>
        <span v-else-if="!tooltip" :class="[{ 'text-ellipsis': ellipsis }]">
          {{ record[dataIndex] }}
        </span>
      </template>
      <slot v-else name="cell" :record="record" :rowIndex="rowIndex" />
    </span>
  </td>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";

export default defineComponent({
  name: "TableColumn",
  props: {
    /** 列标题 */
    title: { type: String },
    /** 行记录 */
    record: { type: Object, default: () => {} },
    /** 列标识字段 */
    dataIndex: { type: String },
    /** 行下标 */
    rowIndex: { type: Number },
    /** 列宽度 */
    width: { type: [Number, String] },
    /** 最小列宽 */
    minWidth: { type: [Number, String] },
    /** 对齐方式 */
    align: { type: String, default: "left" },
    /** 是否开启文本省略 */
    ellipsis: { type: Boolean, default: false },
    /** 是否开启文本气泡提示 */
    tooltip: { type: Boolean, default: false },
  },
  setup(props, { slots }) {
    const hasCustomCell = computed(() => !!slots?.cell);

    const tdClass = computed(() => {
      let align = `text-${props.align || "left"}`;

      return ["bp-table-td", align];
    });

    return {
      hasCustomCell,
      tdClass,
    };
  },
});
</script>
