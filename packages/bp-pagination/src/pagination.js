/**
 * @Author: Sam
 * @Date: 2022-03-04 06:31:44
 * @LastModifiedBy:   Sam
 * @LastModifiedTime: 2022-03-04 06:31:44
 */
import { ref, computed, watchEffect } from "vue";
import total from "./components/total.vue";
import totalPages from "./components/totalPages.vue";
import pager from "./components/pager.vue";

export const usePagination = (props, emit) => {
  const LAYOUT_MAP = {
    pager,
    total,
    totalPages
  };

  const currentPage = ref(1); // 当前页
  const totalPagesNum = ref(0); // 页数

  // 点击页码切换
  const onPageClick = (pageNum = 1) => {
    currentPage.value = pageNum;
    emit("pageChange", pageNum);
  };

  watchEffect(() => {
    const { total, pageSize } = props;
    totalPagesNum.value = Math.ceil(total / pageSize);
  })

  // 布局组件，返回一个包含组件模板、属性以及事件的 Array
  const layoutsComponents = computed(() => {
    const LAYOUT_LIST = props.layout.split(","); // 可自定义的分页布局配置

    // 各组件的属性以及事件配置
    const COMPONENTS_LIST = [],
      COMPONENTS_CFG = {
        pager: {
          bind: {
            pages: totalPagesNum.value,
            prevText: props.prevText,
            nextText: props.nextText,
            currentPage: currentPage.value,
          },
          event: "click",
          eventName: onPageClick,
        },
        total: {
          bind: {
            value: props.total,
            tmpString: props.totalTmpString
          },
        },
        totalPages: {
          bind: {
            value: totalPagesNum.value,
            tmpString: props.pagesTmpString
          },
        },
      };

    LAYOUT_LIST.map((name) => {
      COMPONENTS_LIST.push({ name, component: LAYOUT_MAP[name], ...COMPONENTS_CFG[name] });
    });

    return COMPONENTS_LIST;
  });

  return {
    layoutsComponents,
    currentPage,
  };
};
