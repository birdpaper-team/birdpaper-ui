<template>
  <div :class="name">
    <div :class="`${name}-item`">
      <i class="ri-arrow-left-s-line"></i>
    </div>
    <div :class="`${name}-item`">
      <i class="ri-arrow-right-s-line"></i>
    </div>
  </div>
</template>

<script setup lang="ts" name="Pagination">
const props = defineProps({
  /** 总数 The total number of */
  total: { type: [Number, String], default: 0 },
  /** 当前页数 The current number of pages */
  pageNum: { type: [Number, String], default: 1 },
  /**  每页显示条数 Size of entries per page */
  pageSize: { type: [Number, String], default: () => 10 },
  /**  每页显示条数的选项设置 Option setting to display number of entries per page */
  sizesList: { type: Array, default: () => [10, 20, 50, 100] },
  /**  最大页码数，须为大于等于 5 且小于等于 21 的奇数 The maximum number of pages must be an odd number greater than or equal to 5 and less than or equal to 21 */
  pagerCount: { type: [Number, String], default: 7 },
  /**  是否禁用 Disabled or not */
  disabled: { type: Boolean, default: false },
});
const emits = defineEmits<{
  (e: "page-change", page: number): void;
  (e: "size-change", page: number): void;
}>();

const name = "bp-pagination";
</script>
