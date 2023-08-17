import { App } from "vue";
import _table from "./src/table.vue";
import _tableColumn from "./src/components/table-cloumn.vue";
import { getComponentsPrefix } from "../../utils/config";

_table.name = getComponentsPrefix() + _table.name;
_tableColumn.name = getComponentsPrefix() + _tableColumn.name;

const Table = Object.assign(_table, {
  install: (app: App) => {
    app.component(_table.name, _table);
    app.component(_tableColumn.name, _tableColumn);
  },
});

export type TableInstance = InstanceType<typeof _table>;
export type TableColumnsInstance = InstanceType<typeof _tableColumn>;
export default Table;
