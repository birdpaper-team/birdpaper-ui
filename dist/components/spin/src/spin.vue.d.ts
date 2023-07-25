declare const _sfc_main: import("vue").DefineComponent<{
    /** 是否开启加载 Loading or not */
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** 加载提示文字 The loading tip text */
    tip: {
        type: StringConstructor;
        default: string;
    };
}, {
    name: string;
    slots: Readonly<{
        [name: string]: import("vue").Slot<any>;
    }>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    /** 是否开启加载 Loading or not */
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** 加载提示文字 The loading tip text */
    tip: {
        type: StringConstructor;
        default: string;
    };
}>>, {
    loading: boolean;
    tip: string;
}, {}>;
export default _sfc_main;
