<template>
  <td :class="tdClass">
    <span v-if="!hasCustomCell">{{ record[dataIndex] }}</span>
    <slot v-else name="cell" :record="record" :rowIndex="rowIndex" />
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
    dataIndex: { type: Number },
    /** 行下标 */
    rowIndex: { type: Number },
    /** 列宽度 */
    width: { type: [Number, String] },
    /** 最小列宽 */
    minWidth: { type: [Number, String] },
    /** 标题对齐方式 */
    align: { type: String, default: "left" },
  },
  setup(props, { slots }) {
    const hasCustomCell = computed(() => !!slots?.cell);

    const tdClass = () => {
      let align = `text-${props.align || "left"}`;

      return [align];
    };

    return {
      hasCustomCell,
      tdClass,
    };
  },
});
</script>
