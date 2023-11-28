import type { App } from 'vue';
import _IconDelete from './icon-delete.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconDelete.name = getComponentsPrefix() + _IconDelete.name;

const IconDelete = Object.assign(_IconDelete, {
  install: (app: App) => {
    app.component(_IconDelete.name, _IconDelete);
  }
});

export default IconDelete;