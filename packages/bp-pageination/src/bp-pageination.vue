<template>
  <div class="bp-pageination">
    <div class="bp-pageination-total" v-if="showTotal">
      <p>
        共
        <span>
          {{ total }}
        </span>
        条
      </p>
    </div>

    <bp-pageination-ul
      :disabled="disabled"
      :total="total"
      :pageSize="pageSize"
      :current-page="currentPage"
      :prev-text="prevText"
      :next-text="nextText"
      @click="onPageClick"
    ></bp-pageination-ul>
  </div>
</template>

<script>
import { ref, watch } from "vue";
import bpPageinationUl from "./components/bp-pageination-ul.vue";
export default {
  name: "bp-pageination",
  components: {
    bpPageinationUl,
  },
  props: {
    total: { type: Number, default: 0 }, // 总条目数
    pageSize: { type: Number, default: () => 10 }, // 每页显示条数
    current: { type: Number, default: 1 }, // 当前页数，支持 v-model
    disabled: { type: Boolean, default: false }, // 是否禁用
    prevText: { type: String, default: "" }, // 替代图标显示的上一页文字
    nextText: { type: String, default: "" }, // 替代图标显示的下一页文字
    showTotal: { type: Boolean, default: false }, // 是否显示总数

    // 后续支持
    // sizesList: { type: Array, default: () => [10, 20, 30, 40, 50, 100] }, // 每页显示个数选择器的选项设置
    // size: { type: String, default: "normal" }, // 尺寸
    // simple: { type: Boolean, default: false }, // 是否渲染成简洁版
    // showElevator: { type: Boolean, default: false }, // 显示跳转电梯
    // hideOnSinglePage: { type: Boolean, default: false }, // 显示跳转电梯
    // showSizer: { type: Boolean, default: false }, // 显示分页，用来改变 page-size
  },
  emits: ["update:current"],
  setup(props, { emit }) {
    const currentPage = ref(1); // 当前页

    // 点击页码切换
    const onPageClick = (pageNum = 1) => {
      currentPage.value = pageNum;
      emit("update:current", pageNum);
    };

    watch(
      () => props.current,
      () => {
        currentPage.value = props.current;
      },
      {
        immediate: true,
      }
    );

    return {
      onPageClick,
      currentPage,
    };
  },
};
</script>
