/**
 * @Author: Sam
 * @Date: 2022-03-04 06:31:44
 * @LastModifiedBy:   Sam
 * @LastModifiedTime: 2022-03-04 06:31:44
 */
import { ref, computed, watchEffect } from "vue";
import total from "./components/total.vue";
import totalPages from "./components/totalPages.vue";
import prev from "./components/prev.vue";
import pager from "./components/pager.vue";
import next from "./components/next.vue";
import jumper from "./components/jumper.vue";
import sizes from "./components/sizes.vue";
import simple from "./components/simple.vue";
import { isEvnetNum, warn } from "../../utils/util";

export const usePagination = (props, emit) => {
  /**
   * 分页器包含的组件：
   * total-总条数，totalPages-总页数，prev-上一页，pager-页码列表
   * next-下一页，jumper-页面输入跳转，size-每页条数选择器，simple-简洁分页
   */
  const layout_map = { total, totalPages, prev, pager, next, jumper, sizes, simple };

  /**
   * 当前激活的页码
   */
  const currentPage = ref(Number(props.pageNum));

  /**
   * 每页显示的条数
   */
  const currentPageSize = ref(Number(props.pageSize));

  /**
   * 总页数
   */
  const totalPagesNum = ref(0);

  /**
   * 隐藏分页组件，在开启`hideOnSinglePage`并只有一页时触发
   */
  const hidePagination = computed(() => props.hideOnSinglePage && totalPagesNum.value === 1);

  /**
   * 设置当前激活的页码
   * @param {Stirng} type 'prev', 'next', 'page'
   * @param {Number} pageNum
   */
  const setCurrentPage = (type, pageNum = 1, isEmit = true) => {
    let num = currentPage.value;
    type === "prev" ? num-- : type === "next" ? num++ : (num = Number(pageNum));

    // 限制页码的边界值，最小为 1，最大不超过总页数
    currentPage.value = num < 1 ? 1 : num > totalPagesNum.value ? totalPagesNum.value : num;
    if (currentPage.value != props.pageNum && isEmit) {
      emit("page-change", currentPage.value);
    }
  };

  /**
   * 设置当前一页显示的条数
   * @param {Number} v
   */
  const setCurrentPageSize = (v) => {
    currentPageSize.value = Number(v);
    emit("size-change", currentPageSize.value);
  };

  watchEffect(() => {
    // 根据传入的 total 计算总页数
    totalPagesNum.value = Math.ceil(props.total / currentPageSize.value);

    // 相应的，在每页条数和总页数有变化时，需要重新设定当前激活页，以防止溢出边界值的情况
    if (totalPagesNum.value) {
      setCurrentPage("page", currentPage.value, false);
    }
  });

  // 总条数
  const totalComponents = computed(() => {
    return {
      bind: {
        value: props.total,
        tmpString: props.totalTmpString,
      },
    };
  });

  // 总页数
  const totalPagesComponents = computed(() => {
    return {
      bind: {
        value: totalPagesNum.value,
        tmpString: props.pagesTmpString,
      },
    };
  });

  // 上一页
  const prevComponents = computed(() => {
    return {
      bind: {
        text: props.prevText,
        disabled: props.disabled || currentPage.value === 1,
      },
      event: "click",
      eventName: setCurrentPage,
    };
  });

  // 页码列表
  const pagerComponents = computed(() => {
    return {
      bind: {
        pages: totalPagesNum.value,
        pagerCount: Number(props.pagerCount),
        currentPage: currentPage.value,
      },
      event: "click",
      eventName: setCurrentPage,
    };
  });

  // 下一页
  const nextComponents = computed(() => {
    return {
      bind: {
        text: props.nextText,
        disabled: props.disabled || currentPage.value === totalPagesNum.value,
      },
      event: "click",
      eventName: setCurrentPage,
    };
  });

  // 页面输入跳转
  const jumperComponents = computed(() => {
    return {
      bind: {
        pages: totalPagesNum.value,
        currentPage: currentPage.value,
        tmpString: props.jumperTmpString
      },
      event: "change",
      eventName: setCurrentPage,
    };
  });

  // 每页条数选择器
  const sizesComponents = computed(() => {
    return {
      bind: {
        currentPageSize: currentPageSize.value,
        pageSize: props.pageSize,
        sizesList: props.sizesList,
        tmpString: props.sizesTmpString,
      },
      event: "change",
      eventName: setCurrentPageSize,
    };
  });

  // 精简的分页组件
  const simpleComponents = computed(() => {
    return {
      bind: {
        pages: totalPagesNum.value,
        currentPageSize: currentPageSize.value,
        currentPage: currentPage.value,
        pageSize: props.pageSize,
      },
      event: "change",
      eventName: setCurrentPage,
    };
  });

  // 返回一个包含组件模板、属性以及事件的组件列表
  const componentsList = computed(() => {
    const { layout, simple } = props;
    const layout_list = simple ? ["prev", "simple", "next"] : layout.split(","); // 可自定义的分页布局配置

    const components = [];

    // 各组件的属性以及事件配置
    const component_map = {
      total: totalComponents.value,
      totalPages: totalPagesComponents.value,
      prev: prevComponents.value,
      pager: pagerComponents.value,
      next: nextComponents.value,
      jumper: jumperComponents.value,
      sizes: sizesComponents.value,
      simple: simpleComponents.value,
    };

    layout_list.map((name) => {
      components.push({ name, component: layout_map[name], ...component_map[name] });
    });

    return components;
  });

  return {
    componentsList,
    hidePagination,
  };
};

export const usePaginationValidator = () => {
  /**
   * 最大页码数验证
   * @param {Number,String} v
   * @returns Boolean
   */
  const pagerCountValidator = (v) => {
    const num = Number(v);
    if (isEvnetNum(num) || num < 5 || num > 21) {
      warn(
        "PaginationValidator",
        "属性 `pager-count` 须为大于等于 5 且小于等于 21 的奇数 The props of `pager-count` must be an odd number greater than or equal to 5 and less than or equal to 21"
      );
    }
    return true;
  };

  /**
   * 自定义布局配置验证
   * @param {String} v
   * @returns Boolean
   */
  const layoutValidator = (v) => v.split(",").length !== 0;

  return {
    pagerCountValidator,
    layoutValidator,
  };
};
