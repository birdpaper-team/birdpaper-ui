<template>
  <ul class="bp-pagination-container">
    <li :class="prevItemClass" @click="onClick(isFirstPage ? '' : currentPage - 1)">
      <span v-if="prevText !== ''">{{ prevText }}</span>
      <i v-else class="ri-arrow-left-s-line"></i>
    </li>

    <template v-for="(item, index) in pages" :key="`page-item-${index}`">
      <li
        :class="[
          'bp-pagination-item',
          { 'pagination-item-active': item === currentPage },
          { 'pagination-item-disabled': disabled },
        ]"
        @click="onClick(item)"
      >
        <span>{{ item + 1 }}</span>
      </li>
    </template>

    <li :class="nextItemClass" @click="onClick(isLastPage ? '' : currentPage + 1)">
      <span v-if="nextText !== ''">{{ nextText }}</span>
      <i v-else class="ri-arrow-right-s-line"></i>
    </li>
  </ul>
</template>

<script setup>
import { computed, ref, watch, defineProps } from "vue";

const props = defineProps({
  currentPage: { type: [Number, String], default: 1 }, // 当前激活页
  pages: { type: [Number, String], default: 0 },
  disabled: { type: Boolean, default: false }, // 是否禁用
  prevText: { type: String, default: "" }, // 替代图标显示的上一页文字
  nextText: { type: String, default: "" }, // 替代图标显示的下一页文字
});
const emit = defineEmits(["click"]);

const pageCount = ref(1); // 总页数

const isFirstPage = computed(() => props.currentPage === 1);
const isLastPage = computed(() => props.currentPage === pageCount.value);

const prevItemClass = computed(() => {
  let name = ["bp-pagination-item", "bp-prev-page"];
  if (isFirstPage.value) name.push("pagination-item-disabled");
  return name;
});

const nextItemClass = computed(() => {
  let name = ["bp-pagination-item", "bp-next-page"];
  if (isLastPage.value) name.push("pagination-item-disabled");
  return name;
});

const onClick = (pageNum = "") => {
  if (props.disabled || pageNum === "") return;
  emit("click", pageNum);
};

</script>

<script>
export default { name: "bp-pagination-pager" };
</script>
