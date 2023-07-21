import { PropType } from "vue";
import { SizeType, SpaceType } from "./types";
declare const _default: import("vue").DefineComponent<{
    size: {
        type: PropType<SizeType>;
        default: string;
    };
    type: {
        type: PropType<SpaceType>;
        default: string;
    };
    justify: {
        type: StringConstructor;
        default: string;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    size: {
        type: PropType<SizeType>;
        default: string;
    };
    type: {
        type: PropType<SpaceType>;
        default: string;
    };
    justify: {
        type: StringConstructor;
        default: string;
    };
}>>, {
    type: SpaceType;
    size: SizeType;
    justify: string;
}, {}>;
export default _default;
