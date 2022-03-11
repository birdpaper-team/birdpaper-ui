<template>
  <li
    v-for="(item, index) in pageList"
    :key="`page-item-${index}`"
    :class="[{'bp-page-item':item.type === 'number'}, { 'page-item-active': item.index === currentPage }, { 'page-item-disabled': disabled }]"
    @click="onClick(item.index)"
  >
    <span class="page-text" v-if="item.type === 'number'">{{ item.index }}</span>
    <i class="ri-more-fill" v-else></i>
  </li>
</template>

<script setup>
import { defineProps, defineEmits, watchEffect, ref } from "vue";

const props = defineProps({
  currentPage: { type: [Number, String], default: 1 },
  pages: { type: [Number, String], default: 0 },
  pagerCount: { type: [Number, String], default: 0 },
  disabled: { type: Boolean, default: false },
});
const emit = defineEmits(["click"]);

const pageList = ref([]);

const onClick = (pageNum = "") => {
  if (props.disabled || pageNum === "") return;
  emit("click", "page", pageNum);
};

watchEffect(() => {
  const { pages, currentPage, pagerCount } = props;
  pageList.value = [];

  if (pages < pagerCount + 1) {
    for (let i = 1; i < pages + 1; i++) {
      pageList.value.push({ index: i, type: "number" });
    }
    return;
  }

  /* 当总页数超过限定的最大页数时，需要单独处理分页显示逻辑 */
  /**
   * 指定触发折叠的数值，规则为最大页码数的一半+1，四舍五入取整数
   * 示例：限制最多 7 页，则该数值为 (7 / 2 + 1) = 4.5 -> 5
   */
  const omit_num = Number((pagerCount / 2 + 1).toFixed());

  /**
   * 除去首尾的两个页码后，中间需要动态变化的页码数量
   */
  const middle_page_count = pagerCount - 2;

  /**
   * 是否折叠之前的页码，规则为当前激活页等于或超过指定触发的数值时候
   */
  const is_front_omit = currentPage >= omit_num;
  /**
   * 是否折叠之后的页码，规则为当前激活页还没到指定触发的后面那几页的时候
   */
  const is_end_omit = currentPage <= Number(pages - omit_num);

  // 开始按顺序构建页码列表
  pageList.value = [{ index: 1, type: "number" }];
  is_front_omit && pageList.value.push({ index: currentPage - middle_page_count, type: "ellipsis" });

  // 动态变化的页码，根据折叠状态从而确定开始的页码
  let start_index;
  !is_front_omit && (start_index = 2);

  is_front_omit && is_end_omit && (start_index = currentPage - Number((middle_page_count / 2).toFixed()) + 1);

  !is_end_omit && (start_index = pages - middle_page_count);

  for (let i = start_index; i < middle_page_count + start_index; i++) {
    pageList.value.push({ index: i, type: "number" });
  }

  is_end_omit && pageList.value.push({ index: currentPage + middle_page_count, type: "ellipsis" });

  pageList.value.push({ index: pages, type: "number" });
});
</script>

<script>
export default { name: "bp-pagination-pager" };
</script>
