import { App } from "vue";
import _grid from "./src/grid.vue";
import _col from "./src/col.vue";

_grid.name = `bp-${_grid.name}`;
_col.name = `bp-${_col.name}`;

const Grid = Object.assign(_grid, {
  install: (app: App) => {
    app.component(_grid.name, _grid);
    app.component(_col.name, _col);
  },
});

export { _col as col };
export default Grid;
