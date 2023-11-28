import type { App } from 'vue';
import _IconPivotTable from './icon-pivot-table.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconPivotTable.name = getComponentsPrefix() + _IconPivotTable.name;

const IconPivotTable = Object.assign(_IconPivotTable, {
  install: (app: App) => {
    app.component(_IconPivotTable.name, _IconPivotTable);
  }
});

export default IconPivotTable;