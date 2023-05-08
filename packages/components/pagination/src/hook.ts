import { computed, ref, toRefs } from "vue";
import { PageinationComponent, PageinationProps } from "./types";
import prev from "./components/prev.vue";
import next from "./components/next.vue";
import { warn } from "../../../utils/util";

export const usePagination = (props: PageinationProps) => {
  const layoutMap = { prev, next };

  /** 当前页 */
  const currentPage = ref<number>();

  /** 总页数 */
  const totalPagesNum = ref(0);

  /** 上一页 */
  const prevComponents = computed(() => {
    return {
      bind: {
        text: props.prevText,
        disabled: props.disabled || currentPage.value === 1,
      },
    };
  });

  // 下一页
  const nextComponents = computed(() => {
    return {
      bind: {
        text: props.nextText,
        disabled: props.disabled || currentPage.value === totalPagesNum.value,
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
        prev: prevComponents.value,
        next: nextComponents.value,
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
