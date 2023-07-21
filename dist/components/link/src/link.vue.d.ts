import { PropType } from "vue";
import { LinkStatus } from "./types";
declare const _sfc_main: import("vue").DefineComponent<{
    /** 链接地址 */
    href: {
        type: StringConstructor;
        default: string;
    };
    /** 链接状态 */
    status: {
        type: PropType<LinkStatus>;
        default: string;
    };
    /** 是否禁用 */
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** 是否加载状态 */
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    name: string;
    clsName: import("vue").ComputedRef<string[]>;
    handleClick: (e: MouseEvent) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    click: (ev: MouseEvent) => true;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    /** 链接地址 */
    href: {
        type: StringConstructor;
        default: string;
    };
    /** 链接状态 */
    status: {
        type: PropType<LinkStatus>;
        default: string;
    };
    /** 是否禁用 */
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** 是否加载状态 */
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    onClick?: (ev: MouseEvent) => any;
}, {
    status: LinkStatus;
    loading: boolean;
    disabled: boolean;
    href: string;
}, {}>;
export default _sfc_main;
