<template>
  <div :class="name">
    <ul :class="`${name}-container`">
      <template v-for="item in componentsList">
        <component v-bind="item.bind" :is="item.component" @[item.eventName]="item.event"></component>
      </template>
    </ul>
  </div>
</template>

<script lang="ts">
import { ExtractPropTypes } from "vue";
import { usePagination } from "./hook";
import { PageinationProps } from "./types";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Pagination",
  props: {
    /** 布局配置 The layout config */
    layout: { type: String, default: "prev, pager, next" },
    /** 总数 The total number of */
    total: { type: Number, default: 0 },
    /** 当前页 The current number of pages */
    current: { type: Number, default: 1 },
    /** 每页显示条数 Size of entries per page */
    pageSize: { type: Number, default: () => 10 },
    /** 每页显示条数的选项 Option setting to display number of entries per page */
    sizesList: { type: Array, default: () => [10, 20, 50, 100] },
    /** 上一页按钮文案 Replace the icon displayed on the previous page */
    prevText: { type: String, default: "" },
    /** 下一页按钮文案 Replace the icon displayed on the next page */
    nextText: { type: String, default: "" },
    /** 最大页码数，须为大于等于 5 且小于等于 21 的奇数 The maximum number of pages must be an odd number greater than or equal to 5 and less than or equal to 21 */
    maxPager: { type: Number, default: 7 },
    /** 总条数文案 Replace the total copywriting templates */
    totalTmpString: { type: String, default: "共 {total} 条" },
    /** 页码跳转文案 Replace the jumper copywriting template */
    jumperTmpString: { type: String, default: "前往{jumper}" },
    /** 每页条数选项文案 Replace the sizes copywriting template */
    sizesTmpString: { type: String, default: "{value} 条/页" },
  },
  emits: ["update:current", "update:pageSize", "page-change", "size-change"],
  setup(props, { emit }) {
    const name = "bp-pagination";
    const { componentsList } = usePagination(props as unknown as ExtractPropTypes<PageinationProps>, emit);

    return {
      name,
      componentsList,
    };
  },
});
</script>
