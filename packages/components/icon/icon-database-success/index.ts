import type { App } from 'vue';
import _IconDatabaseSuccess from './icon-database-success.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconDatabaseSuccess.name = getComponentsPrefix() + _IconDatabaseSuccess.name;

const IconDatabaseSuccess = Object.assign(_IconDatabaseSuccess, {
  install: (app: App) => {
    app.component(_IconDatabaseSuccess.name, _IconDatabaseSuccess);
  }
});

export default IconDatabaseSuccess;