import { ExtractPropTypes } from "vue";
import { PageinationComponent, PageinationEmits, PageinationProps } from "./types";
export declare const usePagination: (props: ExtractPropTypes<PageinationProps>, emits: PageinationEmits) => {
    componentsList: import("vue").ComputedRef<PageinationComponent[]>;
};
