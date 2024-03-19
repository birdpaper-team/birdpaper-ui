import { PropTableItem } from "../../../components/table-block/src/tableBlock";

const list: PropTableItem[] = [
    {
        name: "img-src",
        remark: "图片资源地址",
        type: "String",
        default: "",
    },
    {
        name: "size",
        remark: "头像尺寸",
        type: "Enum",
        optional: ["mini", "small", "normal", "large"],
        default: "normal",
    },
    {
        name: "shape",
        remark: "按钮形状",
        type: "Enum",
        optional: ["square", "circle"],
        default: "square",
    },
    {
        name: "fit",
        remark: "图片适应类型",
        type: "Enum",
        optional: ["contain", "cover", "fill", "none", "scale-down"],
        default: "normal",
    },
];

export default list;
