import { InjectionKey } from "vue";
export declare type SelectBindValue = string | number;
export declare class SelectOption {
    label: string;
    value: SelectBindValue;
}
export interface SelectContext {
    modelValue: SelectBindValue;
    onSelect: (value: SelectBindValue, payload: object) => void;
}
export declare const selectInjectionKey: InjectionKey<SelectContext>;
