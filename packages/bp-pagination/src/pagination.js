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

export const usePagination = (props, emit) => {
  /**
   * 分页器包含的组件：
   * total-总条数，totalPages-总页数，prev-上一页
   * pager-页码列表，next-下一页，jumper-页面输入跳转，size-每页条数选择器
   */
  const layout_map = { total, totalPages, prev, pager, next, jumper, sizes };

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
  const hidePagination = props.hideOnSinglePage && totalPagesNum.value === 1;

  /**
   * 设置当前激活的页码
   * @param {Stirng} type 'prev', 'next', 'page'
   * @param {Number} pageNum
   */
  const setCurrentPage = (type, pageNum = 1) => {
    let num = currentPage.value;
    type === "prev" ? num-- : type === "next" ? num++ : (num = Number(pageNum));

    // 限制页码的边界值，最小为 1，最大不超过总页数
    currentPage.value = num < 1 ? 1 : num > totalPagesNum.value ? totalPagesNum.value : num;
    emit("pageChange", currentPage.value);
  };

  /**
   * 设置当前一页显示的条数
   * @param {Number} v
   */
  const setCurrentPageSize = (v) => (currentPageSize.value = Number(v));

  watchEffect(() => {
    // 根据传入的 total 计算总页数
    totalPagesNum.value = Math.ceil(props.total / currentPageSize.value);

    // 相应的，在每页条数和总页数有变化时，需要重新设定当前激活页，以防止溢出边界值的情况
    setCurrentPage("page", currentPage.value);
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
        tmpString: props.sizesTmpString
      },
      event: "change",
      eventName: setCurrentPageSize,
    };
  });

  // 返回一个包含组件模板、属性以及事件的组件列表
  const componentsList = computed(() => {
    const layout_list = props.layout.split(","); // 可自定义的分页布局配置

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
    };

    layout_list.map((name) => {
      components.push({ name, component: layout_map[name], ...component_map[name] });
    });

    return components;
  });

  return {
    componentsList,
    hidePagination
  };
};
