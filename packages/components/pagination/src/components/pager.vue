<template>
  <li
    v-for="(item, index) in pageList"
    :key="`page-item-${index}`"
    :class="[
      ...cls,
      item.index === currentPage ? `${clsBlockName}-active` : '',
      item.type === 'ellipsis' ? `${clsBlockName}-ellipsis` : '',
    ]"
    @click="onClick(item)"
  >
    <span v-if="item.type === 'number'">{{ item.index }}</span>
    <IconMoreFill v-else />
  </li>
</template>

<script setup lang="ts">
import { useNamespace } from "@birdpaper-ui/hooks/src/use-namespace";
import { IconMoreFill } from "birdpaper-icon";
import { computed, ref, watchEffect } from "vue";

const { clsBlockName } = useNamespace("pagination-pager");

const props = defineProps({
  /**
   * @type Number
   * @description: The current page number.
   * @default 1
   */
  currentPage: { type: Number, default: 1 },
  /**
   * @type Number
   * @description: The total number of pages.
   * @default 0
   */
  pages: { type: Number, default: 0 },
  /**
   * @type Boolean
   * @description: Whether the button is disabled.
   * @default false
   */
  disabled: { type: Boolean, default: false },
  /**
   * @type Number
   * @description: The maximum number of pages displayed.
   * @default 0
   */
  maxPager: { type: Number, default: 0 },
  /**
   * @type String
   * @description: The extra class name.
   * @default ""
   */
  extraClass: { type: String, default: "" },
});
const emits = defineEmits<{
  (e: "click", pageNum: number): void;
}>();

const cls = computed(() => [clsBlockName.value, props.extraClass]);

const pageList = ref<{ index: number; type: "number" | "ellipsis" }[]>([]);

const onClick = (item: { index: number; type: "number" | "ellipsis" }) => {
  if (props.disabled || item.type === "ellipsis") return;
  emits("click", item.index);
};

watchEffect(() => {
  const { pages, currentPage, maxPager } = props;
  pageList.value = [];

  // If total pages are less than or equal to max pager, show all page numbers.
  if (pages <= maxPager) {
    pageList.value = Array.from({ length: pages }, (_, i) => ({ index: i + 1, type: "number" }));
    return;
  }

  // Calculate the position of ellipsis and the number of middle pages to display.
  const omitNum = Math.round(maxPager / 2 + 1);
  const middlePageCount = maxPager - 2;
  const isFrontOmit = currentPage >= omitNum;
  const isEndOmit = currentPage <= pages - omitNum;

  // Add the first page
  pageList.value = [{ index: 1, type: "number" }];

  // If front ellipsis is needed, add it
  if (isFrontOmit) {
    pageList.value.push({ index: Math.max(1, currentPage - middlePageCount), type: "ellipsis" });
  }

  // Calculate the start index of middle pages
  let startIndex =
    isFrontOmit && isEndOmit
      ? currentPage - Math.floor(middlePageCount / 2)
      : !isFrontOmit
      ? 2
      : pages - middlePageCount;

  // Add middle page numbers
  pageList.value.push(
    ...Array.from({ length: middlePageCount }, (_, i) => ({ index: startIndex + i, type: "number" as const }))
  );

  // If end ellipsis is needed, add it
  if (isEndOmit) {
    pageList.value.push({ index: currentPage + middlePageCount, type: "ellipsis" });
  }

  // Add the last page
  pageList.value.push({ index: pages, type: "number" });
});
</script>
