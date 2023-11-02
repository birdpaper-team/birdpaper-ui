import { EventTableItem } from "../../../components/table-block/src/tableBlock";

const list: EventTableItem[] = [
  {
    name: "select",
    remark: "点击行选择器时触发",
    params: "rowKeys: string|number|Array<string|number>, rowKey: string|number, record: unkown",
  },
  { name: "select-all", remark: "点击全选触发", params: "isSelect: boolean" },
  { name: "selection-change", remark: "选择项发生改变触发", params: "rowKeys: string|number|Array<string|number>" },
];

export default list;
