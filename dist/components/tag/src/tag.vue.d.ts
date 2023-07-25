declare const _sfc_main: import("vue").DefineComponent<{
    status: {
        type: StringConstructor;
        default: string;
    };
    dot: {
        type: BooleanConstructor;
        default: boolean;
    };
    closeable: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    name: string;
    cls: import("vue").ComputedRef<string[]>;
    visible: import("vue").Ref<boolean>;
    handleClose: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    status: {
        type: StringConstructor;
        default: string;
    };
    dot: {
        type: BooleanConstructor;
        default: boolean;
    };
    closeable: {
        type: BooleanConstructor;
        default: boolean;
    };
}>>, {
    status: string;
    closeable: boolean;
    dot: boolean;
}, {}>;
export default _sfc_main;
