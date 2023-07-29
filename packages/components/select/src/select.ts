import { Slots, VNode, computed, reactive, ref } from "vue";
import { SelectOption } from "./type";
import { getAllElements } from "../../../utils/dom";

export const useSelect = (slots: Slots) => {
  /** 输入框选项属性 */
  const currentSelect = reactive<SelectOption>(new SelectOption());
  /** 是否聚焦状态 */
  const isFocus = ref<boolean>(false);

  /** 选项值和对应展示文本的映射 */
  const valueMap = computed(() => {
    try {
      let obj = {};
      const children: VNode[] = getAllElements(slots.default?.(), true).filter(item => item.type !== Comment) ?? [];

      for (const item of children) {
        // TODO 判断 BpOption 并不百分百可靠
        if (item.type["name"] === "BpOption") {
          obj[item.props.value] = item.props.label || item.children["default"]?.()[0].children;
        }
      }
      return obj;
    } catch (error) {
      return {};
    }
  });

  return {
    isFocus,
    currentSelect,
    valueMap,
  };
};
