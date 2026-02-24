import { EventItem, PropItem, SlotItem } from "../../.vitepress/components/api-block/src/types";

export const tableProps: PropItem[] = [
  { name: "v-model:selected-key", remark: "单选选中值", type: ["String", "Number"] },
  { name: "v-model:selected-keys", remark: "多选选中值", type: ["Array"] },
  { name: "data", remark: "数据源", type: ["Array"], default: "[]" },
  { name: "height", remark: "固定高度", type: ["String"] },
  { name: "border", remark: "是否显示边框", type: ["Boolean"], default: false },
  { name: "stripe", remark: "是否斑马纹", type: ["Boolean"], default: false },
  { name: "row-key", remark: "行唯一键", type: ["String"], default: "id" },
  { name: "loading", remark: "是否加载中", type: ["Boolean"], default: false },
  {
    name: "spin-icon",
    remark: "加载图标",
    type: ["Number", "Component"],
    optional: ["1", "2", "3", "4", "5", "Component"],
    default: 1,
  },
  { name: "description", remark: "加载描述", type: ["String"], default: "" },
  { name: "empty-text", remark: "空数据文本", type: ["String"], default: "暂无数据" },
  { name: "row-selection", remark: "选择配置", type: ["TableRowSelection"], default: "null" },
  { name: "scroll", remark: "滚动配置", type: ["TableScroll"], default: "{}" },
];

export const tableColumnProps: PropItem[] = [
  { name: "title", remark: "列标题", type: ["String"] },
  { name: "data-index", remark: "字段名", type: ["String"] },
  { name: "width", remark: "列宽", type: ["Number", "String"] },
  { name: "min-width", remark: "最小列宽", type: ["Number", "String"] },
  { name: "fixed", remark: "固定列", type: ["String"], optional: ["left", "right"] },
  { name: "align", remark: "对齐方式", type: ["String"], optional: ["left", "center", "right"], default: "left" },
  { name: "ellipsis", remark: "是否省略", type: ["Boolean"], default: false },
  { name: "tooltip", remark: "是否显示提示", type: ["Boolean"], default: false },
];

export const tableEvents: EventItem[] = [
  { name: "select-all", remark: "全选切换", params: "val: boolean" },
  { name: "select", remark: "选中行变化", params: "vals: CheckboxValue[], rowKey: RadioValue, record: any" },
  { name: "selection-change", remark: "多选变化", params: "vals: CheckboxValue[]" },
];

export const tableSlots: SlotItem[] = [
  { name: "columns", remark: "列定义" },
  { name: "empty", remark: "空状态内容" },
];

export const tableColumnSlots: SlotItem[] = [
  { name: "cell", remark: "单元格内容", params: "{ record, rowIndex }" },
];
