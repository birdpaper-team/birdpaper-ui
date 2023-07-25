import { PropType } from "vue";
import { RadioGroupValue } from "./type";
declare const _sfc_main: import("vue").DefineComponent<{
    /** 单选框绑定值 */
    modelValue: {
        type: PropType<RadioGroupValue>;
    };
    /** 选项列表 */
    optionList: {
        type: PropType<{
            label: string;
            value: RadioGroupValue;
        }[]>;
        default: () => any[];
    };
    /** 是否禁用 */
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    name: string;
    val: import("vue").Ref<RadioGroupValue>;
    updateValue: (val: RadioGroupValue) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    /** 单选框绑定值 */
    modelValue: {
        type: PropType<RadioGroupValue>;
    };
    /** 选项列表 */
    optionList: {
        type: PropType<{
            label: string;
            value: RadioGroupValue;
        }[]>;
        default: () => any[];
    };
    /** 是否禁用 */
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    "onUpdate:modelValue"?: (...args: any[]) => any;
}, {
    disabled: boolean;
    optionList: {
        label: string;
        value: RadioGroupValue;
    }[];
}, {}>;
export default _sfc_main;
