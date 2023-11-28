import type { App } from 'vue';
import _IconMassageTable from './icon-massage-table.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconMassageTable.name = getComponentsPrefix() + _IconMassageTable.name;

const IconMassageTable = Object.assign(_IconMassageTable, {
  install: (app: App) => {
    app.component(_IconMassageTable.name, _IconMassageTable);
  }
});

export default IconMassageTable;