<template>
  <div class="bp-pagination">
    <div class="bp-pagination-total" v-if="showTotal">
      <p>
        共
        <span>
          {{ total }}
        </span>
        条
      </p>
    </div>

    <bp-pagination-ul
      :disabled="disabled"
      :total="total"
      :pageSize="pageSize"
      :current-page="currentPage"
      :prev-text="prevText"
      :next-text="nextText"
      @click="onPageClick"
    ></bp-pagination-ul>

    <bp-select v-model="pageSize" :option-list="sizeOption"> </bp-select>
  </div>
</template>

<script>
import { ref, watch } from "vue";
import bpPaginationUl from "./components/bp-pagination-ul.vue";
export default {
  name: "bp-pagination",
  components: {
    bpPaginationUl,
  },
  props: {
    total: { type: [Number, String], default: 0 }, // 总条目数
    pageSize: { type: [Number, String], default: () => 20 }, // 每页显示条数
    current: { type: [Number, String], default: 1 }, // 当前页数，支持 v-model
    disabled: { type: Boolean, default: false }, // 是否禁用
    prevText: { type: String, default: "" }, // 替代图标显示的上一页文字
    nextText: { type: String, default: "" }, // 替代图标显示的下一页文字
    showTotal: { type: Boolean, default: false }, // 是否显示总数
    sizesList: { type: Array, default: () => [10, 20, 50, 100] }, // 每页显示个数选择器的选项设置

    // 后续支持
    // size: { type: String, default: "normal" }, // 尺寸
    // simple: { type: Boolean, default: false }, // 是否渲染成简洁版
    // showElevator: { type: Boolean, default: false }, // 显示跳转电梯
    // hideOnSinglePage: { type: Boolean, default: false }, // 显示跳转电梯
    // showSizer: { type: Boolean, default: false }, // 显示分页，用来改变 page-size
  },
  emits: ["pageChange"],
  setup(props, { emit }) {
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

    return {
      sizeOption,
      onPageClick,
      currentPage,
    };
  },
};
</script>
