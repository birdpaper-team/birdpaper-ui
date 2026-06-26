<template>
  <div :class="cls">
    <ul :class="`${clsBlockName}-container`">
      <template v-for="item in componentsList">
        <component
          :extraClass="`${clsBlockName}-item ${clsBlockName}-${size}`"
          v-bind="item.bind"
          :is="item.component"
          @[item.eventName]="item.event"
        ></component>
      </template>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useNamespace } from "@birdpaper-ui/hooks";
import { PaginationProps, paginationProps } from "./props";
import prev from "./components/prev.vue";
import next from "./components/next.vue";
import pager from "./components/pager.vue";
import sizes from "./components/sizes.vue";
import jumper from "./components/jumper.vue";
import total from "./components/total.vue";
import { computed, ref, watchEffect } from "vue";
import { PageinationComponent } from "./types";

defineOptions({ name: "Pagination" });
const { clsBlockName } = useNamespace("pagination");

const props: PaginationProps = defineProps(paginationProps);
const emits = defineEmits<{
  (e: "change", page: number): void;
  (e: "size-change", pageSize: number): void;
}>();
const layoutMap = { prev, next, pager, sizes, jumper, total };

const cls = computed(() => {
  return [clsBlockName.value, `${clsBlockName.value}-${props.size}`, "select-none"];
});

const currentPage = ref<number>(props.current || 1);
const currentPageSize = ref<number>(props.pageSize || 10);
const totalPages = ref<number>(0);

const setPage = (type: "prev" | "next" | "page", pageNum?: number) => {
  let num = currentPage.value;
  type === "prev" ? num-- : type === "next" ? num++ : (num = pageNum ?? 1);

  currentPage.value = num < 1 ? 1 : num > totalPages.value ? totalPages.value : num;
  return currentPage.value;
};

const setSizes = (pageSizes: number) => {
  currentPageSize.value = pageSizes;
  return currentPageSize.value;
};

watchEffect(() => {
  if (props.current) {
    currentPage.value = props.current;
  }
});

watchEffect(() => {
  totalPages.value = Math.ceil(props.total / currentPageSize.value);

  if (currentPage.value > totalPages.value) {
    setPage("page", totalPages.value);
  }
});

const componentsList = computed<PageinationComponent[]>(() => {
  try {
    const list: string[] = props.layout.replace(/\s*/g, "").split(",") || [];
    if (!list.length) return [];

    const components: PageinationComponent[] = [];
    const componentMap = {
      total: totalComponents.value,
      prev: prevComponents.value,
      next: nextComponents.value,
      pager: pagerComponents.value,
      jumper: jumperComponents.value,
      sizes: sizesComponents.value,
    };

    list.map((name) => {
      components.push({ name, component: layoutMap[name], ...componentMap[name] });
    });
    return components;
  } catch (error) {
    console.error(error);
    return [];
  }
});

const prevComponents = computed(() => {
  return {
    bind: {
      text: props.prevText,
      disabled: currentPage.value === 1 || props.disabled,
    },
    eventName: "click",
    event: () => {
      const pages = setPage("prev");
      emits("change", pages);
    },
  };
});

const nextComponents = computed(() => {
  return {
    bind: {
      text: props.nextText,
      disabled: currentPage.value === totalPages.value || props.disabled,
    },
    eventName: "click",
    event: () => {
      const pages = setPage("next");
      emits("change", pages);
    },
  };
});

const pagerComponents = computed(() => {
  return {
    bind: {
      pages: totalPages.value,
      maxPager: props.maxPager,
      disabled: props.disabled,
      currentPage: currentPage.value,
    },
    eventName: "click",
    event: (page: number) => {
      const pages = setPage("page", page);
      emits("change", pages);
    },
  };
});

const sizesComponents = computed(() => {
  return {
    bind: {
      size: props.size,
      disabled: props.disabled,
      currentSize: currentPageSize.value,
      sizesList: props.sizesList,
      tmpString: props.sizesTmpString,
    },
    eventName: "change",
    event: (size: number) => {
      const sizes = setSizes(size);
      emits("size-change", sizes);
    },
  };
});

const jumperComponents = computed(() => {
  return {
    bind: {
      size: props.size,
      disabled: props.disabled,
      pages: totalPages.value,
      currentPage: currentPage.value,
      tmpString: props.jumperTmpString,
    },
    eventName: "change",
    event: (page: number) => {
      const pages = setPage("page", page);
      emits("change", pages);
    },
  };
});

const totalComponents = computed(() => {
  return {
    bind: {
      value: props.total,
      tmpString: props.totalTmpString,
    },
  };
});
</script>
