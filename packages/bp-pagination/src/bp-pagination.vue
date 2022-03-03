<template>
  <div class="bp-pagination">
    <!--<div class="bp-pagination-total" v-if="showTotal">
      <p>
        共
        <span>
          {{ total }}
        </span>
        条
      </p>
    </div>-->

    <bp-pagination-ul
      :disabled="disabled"
      :total="total"
      :pageSize="pageSize"
      :current-page="currentPage"
      :prev-text="prevText"
      :next-text="nextText"
      @click="onPageClick"
    ></bp-pagination-ul>

    <!--<bp-select v-model="pageSize" :option-list="sizeOption"> </bp-select>-->
  </div>
</template>

<script setup>
import { ref, watch, defineProps, defineEmits } from "vue";
import bpPaginationUl from "./components/bp-pagination-ul.vue";

const props = defineProps({
  total: { type: [Number, String], default: 0 }, // 总条目数
  pageSize: { type: [Number, String], default: () => 20 }, // 每页显示条数
  current: { type: [Number, String], default: 1 }, // 当前页数，支持 v-model
  disabled: { type: Boolean, default: false }, // 是否禁用
  layout: { type: String, default: "" }, // 自定义分页布局
  prevText: { type: String, default: "" }, // 替代图标显示的上一页文字
  nextText: { type: String, default: "" }, // 替代图标显示的下一页文字
  sizesList: { type: Array, default: () => [10, 20, 50, 100] }, // 每页显示个数选择器的选项设置
  pagerCount: { type: Number, default: 7 }, //
  background: { type: Boolean, default: false }, // 背景色支持
  simple: { type: Boolean, default: false }, // 是否渲染成简洁版
  hideOnSinglePage: { type: Boolean, default: false }, // 只有一页时隐藏
});
const emit = defineEmits(["pageChange"]);
const currentPage = ref(1); // 当前页

// 点击页码切换
const onPageClick = (pageNum = 1) => {
  currentPage.value = pageNum;
  emit("pageChange", pageNum);
};

const sizeOption = ref([]);

watch(
  () => props.current,
  () => {
    currentPage.value = Number(props.current);
  },
  {
    immediate: true,
  }
);
watch(
  () => props.sizesList,
  () => {
    sizeOption.value = [];
    for (let i = 0; i < props.sizesList.length; i++) {
      const item = props.sizesList[i];
      sizeOption.value.push({ label: `${item}条/页`, value: item });
    }
  },
  {
    immediate: true,
  }
);
</script>

<script>
export default { name: "bp-pagination" };
</script>
