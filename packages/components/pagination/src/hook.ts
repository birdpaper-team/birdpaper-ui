import { ExtractPropTypes, computed, ref, watchEffect } from "vue";
import { PageinationComponent, PageinationEmits, PageinationProps } from "./types";
import prev from "./components/prev.vue";
import next from "./components/next.vue";
import total from "./components/total.vue";
import pager from "./components/pager.vue";
import jumper from "./components/jumper.vue";
import sizes from "./components/sizes.vue";
import { warn } from "../../../utils/util";

export const usePagination = (props: ExtractPropTypes<PageinationProps>, emits: PageinationEmits) => {
  const layoutMap = { prev, next, total, pager, jumper, sizes };

  /** 当前页 */
  const currentPage = ref<number>(props.current || 1);

  /** 每页显示的条数 */
  const currentPageSize = ref<number>(props.pageSize);

  /** 总页数 */
  const totalPagesNum = ref<number>(0);

  /**
   * 设置当前页
   * @param type "prev" | "next" | "page"
   * @param pageNum number
   */
  const setPage = (type: "prev" | "next" | "page", pageNum?: number): number => {
    let num = currentPage.value;
    type === "prev" ? num-- : type === "next" ? num++ : (num = pageNum ?? 1);

    // 限制页码的边界值，最小为 1，最大不超过总页数
    currentPage.value = num < 1 ? 1 : num > totalPagesNum.value ? totalPagesNum.value : num;
    return currentPage.value;
  };

  /**
   * 设置每页条数
   * @param pageSizes number
   * @returns currentPageSize
   */
  const sizeSizes = (pageSizes: number) => {
    currentPageSize.value = pageSizes;
    return currentPageSize.value;
  };

  watchEffect(() => {
    // 根据传入的 total 计算总页数
    totalPagesNum.value = Math.ceil(props.total / currentPageSize.value);

    // 相应的，在每页条数和总页数有变化时，需要重新设定当前激活页，以防止溢出边界值的情况
    if (currentPage.value > totalPagesNum.value) {
      setPage("page", totalPagesNum.value);
    }
  });

  /** 总条数 */
  const totalComponents = computed(() => {
    return {
      bind: {
        value: props.total,
        tmpString: props.totalTmpString,
      },
    };
  });

  /** 上一页 */
  const prevComponents = computed(() => {
    return {
      bind: {
        text: props.prevText,
        disabled: currentPage.value === 1,
      },
      eventName: "click",
      event: () => {
        const pages = setPage("prev");
        emits("update:current", pages);
        emits("page-change", pages);
      },
    };
  });

  /** 页码器 */
  const pagerComponents = computed(() => {
    return {
      bind: {
        pages: totalPagesNum.value,
        maxPager: props.maxPager,
        currentPage: currentPage.value,
      },
      eventName: "click",
      event: (page: number) => {
        const pages = setPage("page", page);
        emits("update:current", pages);
        emits("page-change", pages);
      },
    };
  });

  /** 页码跳转 */
  const jumperComponents = computed(() => {
    return {
      bind: {
        pages: totalPagesNum.value,
        currentPage: currentPage.value,
        tmpString: props.jumperTmpString,
      },
      eventName: "change",
      event: (page: number) => {
        const pages = setPage("page", page);
        emits("update:current", pages);
        emits("page-change", pages);
      },
    };
  });

  // 下一页
  const nextComponents = computed(() => {
    return {
      bind: {
        text: props.nextText,
        disabled: currentPage.value === totalPagesNum.value,
      },
      eventName: "click",
      event: () => {
        const pages = setPage("next");
        emits("update:current", pages);
        emits("page-change", pages);
      },
    };
  });

  // 每页条数
  const sizesComponents = computed(() => {
    return {
      bind: {
        currentSize: currentPageSize.value,
        sizesList: props.sizesList,
        tmpString: props.sizesTmpString,
      },
      eventName: "change",
      event: (size: number) => {
        const sizes = sizeSizes(size);
        emits("update:pageSize", sizes);
        emits("size-change", sizes);
      },
    };
  });

  /** 用于渲染的分页组件列表 */
  const componentsList = computed<PageinationComponent[]>(() => {
    try {
      const layoutList: string[] = props.layout.replace(/\s*/g, "").split(",") || [];
      if (layoutList.length === 0) return [];

      const components: PageinationComponent[] = [];

      // 各组件的属性以及事件配置
      const componentMap = {
        total: totalComponents.value,
        prev: prevComponents.value,
        next: nextComponents.value,
        pager: pagerComponents.value,
        jumper: jumperComponents.value,
        sizes: sizesComponents.value,
      };

      layoutList.map(name => {
        components.push({ name, component: layoutMap[name], ...componentMap[name] });
      });

      return components;
    } catch (error) {
      warn("Pagination", "Render componentsList failure");
    }
  });

  return {
    componentsList,
  };
};
