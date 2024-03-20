import { PropTableItem } from "../../../components/table-block/src/tableBlock";

const list: PropTableItem[] = [
    {
        name: "size",
        remark: "图标尺寸",
        type: "String",
        default: " 18",
    },
    {
        name: "fill",
        remark: " 填充颜色",
        type: "String",
        default: "",
    },
    {
        name: "rotate",
        remark: "旋转角度",
        type: "Number",
        default: "",
    },
    {
        name: "spin",
        remark: "是否旋转",
        type: "Boolean",
        default: "false",
    },
];

export default list;
