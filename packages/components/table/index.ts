import { App } from "vue";
import _table from "./src/table.vue";

const Table = Object.assign(_table, {
  install: (app: App) => {
    app.component(_table.name, _table);
  },
});

export default Table;
