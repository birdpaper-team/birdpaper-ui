import type { App } from 'vue';
import _IconTable from './icon-table.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconTable.name = getComponentsPrefix() + _IconTable.name;

const IconTable = Object.assign(_IconTable, {
  install: (app: App) => {
    app.component(_IconTable.name, _IconTable);
  }
});

export default IconTable;