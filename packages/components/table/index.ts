import { App } from "vue";
import _table from "./src/table.vue";
import { getComponentsPrefix } from "../../utils/config";

_table.name = getComponentsPrefix() + _table.name;

const Table = Object.assign(_table, {
  install: (app: App) => {
    app.component(_table.name, _table);
  },
});

export type TableInstance = InstanceType<typeof _table>;
export default Table;
