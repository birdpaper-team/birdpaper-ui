import { CSSProperties } from 'vue';
declare const _default: import("vue").DefineComponent<{
    /** 图标尺寸 */
    size: {
        type: StringConstructor;
    };
    /** 线宽 */
    strokeWidth: {
        type: NumberConstructor;
        default: number;
    };
    /** 端点类型 */
    strokeLinecap: {
        type: StringConstructor;
        default: string;
        validator: (value: any) => boolean;
    };
    /** 拐角类型 */
    strokeLinejoin: {
        type: StringConstructor;
        default: string;
        validator: (value: any) => boolean;
    };
    /** 旋转角度 */
    rotate: {
        type: NumberConstructor;
    };
    /** 是否旋转 */
    spin: {
        type: BooleanConstructor;
    };
}, {
    iconClass: import("vue").ComputedRef<(string | {
        [x: string]: boolean;
    })[]>;
    innerStyle: import("vue").ComputedRef<CSSProperties>;
    onClick: (ev: MouseEvent) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    click: (ev: MouseEvent) => true;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    /** 图标尺寸 */
    size: {
        type: StringConstructor;
    };
    /** 线宽 */
    strokeWidth: {
        type: NumberConstructor;
        default: number;
    };
    /** 端点类型 */
    strokeLinecap: {
        type: StringConstructor;
        default: string;
        validator: (value: any) => boolean;
    };
    /** 拐角类型 */
    strokeLinejoin: {
        type: StringConstructor;
        default: string;
        validator: (value: any) => boolean;
    };
    /** 旋转角度 */
    rotate: {
        type: NumberConstructor;
    };
    /** 是否旋转 */
    spin: {
        type: BooleanConstructor;
    };
}>> & {
    onClick?: ((ev: MouseEvent) => any) | undefined;
}, {
    strokeWidth: number;
    strokeLinecap: string;
    strokeLinejoin: string;
    spin: boolean;
}, {}>;
export default _default;
