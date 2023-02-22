/**
 * @ Author: Sam
 * @ Create Time: 2023-02-22 20:18:08
 * @ Modified by: Sam
 * @ Modified time: 2023-02-23 05:53:24
 */

import { App } from "vue";
import _table from "./src/table.vue";

const Table = Object.assign(_table, {
  install: (app: App) => {
    app.component(_table.name, _table);
  },
});

export default Table;
