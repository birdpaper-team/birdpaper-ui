import { InjectionKey } from "vue";
export declare type SelectBindValue = string | number;
export declare class SelectOption {
    /** 选项文本 */
    label: string;
    /** 选项值 */
    value: SelectBindValue;
}
export interface SelectContext {
    /** 绑定值 */
    modelValue: SelectBindValue;
    /** 当前选择 */
    currentSelect: SelectOption;
    /** 选择后触发 */
    onSelect: (value: SelectBindValue, payload: object) => void;
}
export declare const selectInjectionKey: InjectionKey<SelectContext>;
