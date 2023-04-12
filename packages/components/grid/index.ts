import { App } from "vue";
import { getComponentsPrefix } from "../../utils/config";
import _grid from "./src/grid.vue";
import _col from "./src/col.vue";

_grid.name = getComponentsPrefix() + _grid.name;
_col.name = getComponentsPrefix() + _col.name;

const Grid = Object.assign(_grid, {
  Col: _col,
  install: (app: App) => {
    app.component(_grid.name, _grid);
    app.component(_col.name, _col);
  },
});

export type GridInstance = InstanceType<typeof _grid>;
export type ColInstance = InstanceType<typeof _col>;

export { _col as Col };
export default Grid;
