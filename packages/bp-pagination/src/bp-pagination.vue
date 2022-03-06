<template>
  <div class="bp-pagination">
    <ul class="bp-pagination-container">
      <template v-for="(item, index) in layoutsComponents" :key="`p-${index}`">
        <component
          :is="item.component"
          :disabled="disabled"
          v-bind="item.bind"
          @[item.event]="item.eventName"
        ></component>
      </template>
    </ul>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, watchEffect } from "vue";
import { usePagination } from "./pagination";

const props = defineProps({
  total: { type: [Number, String], default: 0 }, // 总条目数
  pageSize: { type: [Number, String], default: () => 20 }, // 每页显示条数
  current: { type: [Number, String], default: 1 }, // 当前页数，支持 v-model
  disabled: { type: Boolean, default: false }, // 是否禁用
  layout: { type: String, default: "total,prev,pager,next" }, // 自定义分页布局，totalPages,total,prev,pager,next,jumper,sizes
  prevText: { type: String, default: "" }, // 替代图标显示的上一页文字
  nextText: { type: String, default: "" }, // 替代图标显示的下一页文字
  totalTmpString: { type: String, default: "共 {total} 条" },
  pagesTmpString: { type: String, default: "共 {totalPages} 页" },
  sizesList: { type: Array, default: () => [10, 20, 50, 100] }, // 每页显示个数选择器的选项设置
  pagerCount: { type: Number, default: 7 }, //
  background: { type: Boolean, default: false }, // 背景色支持
  simple: { type: Boolean, default: false }, // 是否渲染成简洁版
  hideOnSinglePage: { type: Boolean, default: false }, // 只有一页时隐藏
});
const emit = defineEmits(["pageChange"]);

const { layoutsComponents, currentPage } = usePagination(props, emit);

watchEffect(() => {
  currentPage.value = Number(props.current);
});
</script>

<script>
export default { name: "bp-pagination" };
</script>
