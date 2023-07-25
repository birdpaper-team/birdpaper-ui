import { PropType } from "vue";
import { AlertType } from "./types";
declare const _sfc_main: import("vue").DefineComponent<{
    type: {
        type: PropType<AlertType>;
        default: string;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    closeable: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    name: string;
    cls: import("vue").ComputedRef<string[]>;
    isRender: import("vue").Ref<boolean>;
    handleClose: () => void;
    slots: Readonly<{
        [name: string]: import("vue").Slot<any>;
    }>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "close"[], "close", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    type: {
        type: PropType<AlertType>;
        default: string;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    closeable: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    onClose?: (...args: any[]) => any;
}, {
    type: AlertType;
    title: string;
    closeable: boolean;
}, {}>;
export default _sfc_main;
