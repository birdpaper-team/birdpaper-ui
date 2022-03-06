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

export const usePagination = (props, emit) => {
  const LAYOUT_MAP = {
    prev,
    pager,
    next,
    total,
    totalPages,
    jumper
  };

  const currentPage = ref(1); // 当前页
  const totalPagesNum = ref(0); // 页数

  // 点击页码切换
  const onPageClick = (type, pageNum = 1) => {
    let num = currentPage.value;
    switch (type) {
      case 'prev':
        num--;
        break;
      case 'next':
        num++;
        break;

      default:
        num = Number(pageNum)
        break;
    }
    num < 1 && (num = 1);
    num > totalPagesNum.value && (num = totalPagesNum.value)
    currentPage.value = num;
    emit("pageChange", currentPage.value);
  };

  watchEffect(() => {
    const { total, pageSize } = props;
    totalPagesNum.value = Math.ceil(total / pageSize);
  });

  // 布局组件，返回一个包含组件模板、属性以及事件的 Array
  const layoutsComponents = computed(() => {
    const { layout } = props;
    const LAYOUT_LIST = layout.split(","); // 可自定义的分页布局配置

    // 各组件的属性以及事件配置
    const components = [],
      componentTmplete = {
        'prev': {
          bind: {
            text: props.prevText,
            disabled: props.disabled || currentPage.value === 1
          },
          event: "click",
          eventName: onPageClick,
        },
        'pager': {
          bind: {
            pages: totalPagesNum.value,
            currentPage: currentPage.value,
          },
          event: "click",
          eventName: onPageClick,
        },
        'next': {
          bind: {
            text: props.nextText,
            disabled: props.disabled || currentPage.value === totalPagesNum.value
          },
          event: "click",
          eventName: onPageClick,
        },
        'total': {
          bind: {
            value: props.total,
            tmpString: props.totalTmpString
          },
        },
        'totalPages': {
          bind: {
            value: totalPagesNum.value,
            tmpString: props.pagesTmpString
          },
        },
        'jumper': {
          bind: {
            pages: totalPagesNum.value,
            currentPage: currentPage.value,
          },
          event: "change",
          eventName: onPageClick,
        },
      };

    LAYOUT_LIST.map((name) => {
      components.push({ name, component: LAYOUT_MAP[name], ...componentTmplete[name] });
    });

    return components;
  });

  return {
    layoutsComponents,
    currentPage,
  };
};
