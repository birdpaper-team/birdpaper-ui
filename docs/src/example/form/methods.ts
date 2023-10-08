import { MethodTableItem } from "../../../components/table-block/src/tableBlock";

const list: MethodTableItem[] = [
  {
    name: "validate",
    remark: "表单异步验证",
    params: "callback?:ValidateCallback",
    returns: "Promise<undefined | ValidateError[]>",
  },
  {
    name: "resetFields",
    remark: "重置表单",
  },
];

export default list;
