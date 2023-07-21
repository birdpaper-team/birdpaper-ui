import { App } from "vue";
import _grid from "./src/grid.vue";
import _col from "./src/col.vue";
declare const Grid: ((props: Record<string, any> & {}) => any) & {
    Col: (props: Record<string, any> & {}) => any;
    install: (app: App) => void;
};
export declare type GridInstance = InstanceType<typeof _grid>;
export declare type ColInstance = InstanceType<typeof _col>;
export { _col as Col };
export default Grid;
