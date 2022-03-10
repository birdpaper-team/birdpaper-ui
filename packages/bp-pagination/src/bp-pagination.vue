<template>
  <div class="bp-pagination" v-show="!hidePagination">
    <ul :class="className">
      <template v-for="(item, index) in componentsList" :key="`p-${index}`">
        <component :is="item.component" :disabled="disabled" v-bind="item.bind" @[item.event]="item.eventName"></component>
      </template>
    </ul>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, watchEffect, computed } from "vue";
import { usePagination } from "./pagination";

const props = defineProps({
  total: { type: [Number, String], default: 0 }, // 总条目数
  pageSize: { type: [Number, String], default: () => 10 }, // 每页显示条数
  pageNum: { type: [Number, String], default: 1 }, // 当前页数
  pagerCount: { type: [Number, String], default: 11 }, // 最大页码数 大于等于 5 且小于等于 21 的奇数
  disabled: { type: Boolean, default: false }, // 是否禁用
  layout: { type: String, default: "total,prev,pager,next" }, // 自定义分页布局，totalPages,total,prev,pager,next,jumper,sizes
  prevText: { type: String, default: "" }, // 替代图标显示的上一页文字
  nextText: { type: String, default: "" }, // 替代图标显示的下一页文字
  totalTmpString: { type: String, default: "共 {total} 条" },
  pagesTmpString: { type: String, default: "共 {totalPages} 页" },
  sizesTmpString: { type: String, default: "{value}条/页" },
  sizesList: { type: Array, default: () => [10, 20, 50, 100] }, // 每页显示个数选择器的选项设置
  background: { type: Boolean, default: false }, // 背景色支持
  simple: { type: Boolean, default: false }, // 是否渲染成简洁版
  hideOnSinglePage: { type: Boolean, default: false }, // 只有一页时隐藏
});
const emit = defineEmits(["pageChange"]);

const { componentsList, hidePagination } = usePagination(props, emit);

const className = computed(() => {
  let name = ["bp-page-container", { "container-background": props.background && !props.simple}, { "container-simple": props.simple }];
  return name;
});
</script>

<script>
export default { name: "bp-pagination" };
</script>
