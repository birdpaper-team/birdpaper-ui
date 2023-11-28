import type { App } from 'vue';
import _IconFreezingLineColumn from './icon-freezing-line-column.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFreezingLineColumn.name = getComponentsPrefix() + _IconFreezingLineColumn.name;

const IconFreezingLineColumn = Object.assign(_IconFreezingLineColumn, {
  install: (app: App) => {
    app.component(_IconFreezingLineColumn.name, _IconFreezingLineColumn);
  }
});

export default IconFreezingLineColumn;