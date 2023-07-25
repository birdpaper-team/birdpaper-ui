import { PropType } from "vue";
import { SelectBindValue } from "./type";
declare const _sfc_main: import("vue").DefineComponent<{
    value: {
        type: PropType<SelectBindValue>;
        default: string;
    };
    label: {
        type: StringConstructor;
        default: string;
    };
}, {
    name: string;
    handleClick: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    value: {
        type: PropType<SelectBindValue>;
        default: string;
    };
    label: {
        type: StringConstructor;
        default: string;
    };
}>>, {
    value: SelectBindValue;
    label: string;
}, {}>;
export default _sfc_main;
