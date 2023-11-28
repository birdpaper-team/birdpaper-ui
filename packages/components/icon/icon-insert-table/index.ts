import type { App } from 'vue';
import _IconInsertTable from './icon-insert-table.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconInsertTable.name = getComponentsPrefix() + _IconInsertTable.name;

const IconInsertTable = Object.assign(_IconInsertTable, {
  install: (app: App) => {
    app.component(_IconInsertTable.name, _IconInsertTable);
  }
});

export default IconInsertTable;