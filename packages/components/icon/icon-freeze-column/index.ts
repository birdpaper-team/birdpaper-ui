import type { App } from 'vue';
import _IconFreezeColumn from './icon-freeze-column.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFreezeColumn.name = getComponentsPrefix() + _IconFreezeColumn.name;

const IconFreezeColumn = Object.assign(_IconFreezeColumn, {
  install: (app: App) => {
    app.component(_IconFreezeColumn.name, _IconFreezeColumn);
  }
});

export default IconFreezeColumn;