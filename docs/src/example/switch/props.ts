import { PropTableItem } from "../../../components/table-block/src/tableBlock";

const list: PropTableItem[] = [
  { name: "v-model", remark: "绑定值", type: ["Boolean"], default: "false" },
  { name: "disabled", remark: "是否禁用", type: "Boolean", default: "false" },
  { name: "checkValue", remark: "选中时的值", type: ["String","Number","Boolean"], default: "true" },
  { name: "uncheckValue", remark: "未选中时的值", type: ["String","Number","Boolean"], default: "false" },
  { name: "on-before-ok", remark: "触发确定前的回调，返回 false 则中断", type: "Function", default: "()=>true" },
];

export default list;
