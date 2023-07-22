import { ButtonType, ButtonSize, ButtonShape, ButtonStatus } from "./types";
import { PropType } from "vue";
declare const _sfc_main: import("vue").DefineComponent<{
    /** 按钮类型 Type of the button */
    type: {
        type: PropType<ButtonType>;
        default: string;
    };
    /** 按钮尺寸 Size of the button */
    size: {
        type: PropType<ButtonSize>;
        default: string;
    };
    /** 按钮形状 Shape of the button */
    shape: {
        type: PropType<ButtonShape>;
        default: string;
    };
    /** 按钮状态 Status of the button */
    status: {
        type: PropType<ButtonStatus>;
        default: string;
    };
    /** 是否加载 Loading or not */
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** 是否禁用 Disabled or not */
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** 按钮图标 Button icon */
    icon: {
        type: StringConstructor;
        default: string;
    };
    /** 是否撑满父级 Block or not */
    block: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    isDisabled: import("vue").ComputedRef<boolean>;
    btnClass: import("vue").ComputedRef<(string | {
        "has-default-slot": boolean;
        "is-block"?: undefined;
    } | {
        "is-block": boolean;
        "has-default-slot"?: undefined;
    })[]>;
    btnIcon: import("vue").ComputedRef<string>;
    onClick: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click"[], "click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    /** 按钮类型 Type of the button */
    type: {
        type: PropType<ButtonType>;
        default: string;
    };
    /** 按钮尺寸 Size of the button */
    size: {
        type: PropType<ButtonSize>;
        default: string;
    };
    /** 按钮形状 Shape of the button */
    shape: {
        type: PropType<ButtonShape>;
        default: string;
    };
    /** 按钮状态 Status of the button */
    status: {
        type: PropType<ButtonStatus>;
        default: string;
    };
    /** 是否加载 Loading or not */
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** 是否禁用 Disabled or not */
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** 按钮图标 Button icon */
    icon: {
        type: StringConstructor;
        default: string;
    };
    /** 是否撑满父级 Block or not */
    block: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    onClick?: (...args: any[]) => any;
}, {
    type: ButtonType;
    size: ButtonSize;
    shape: ButtonShape;
    status: ButtonStatus;
    loading: boolean;
    disabled: boolean;
    icon: string;
    block: boolean;
}, {}>;
export default _sfc_main;
