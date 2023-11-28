import type { App } from 'vue';
import _IconDatabaseFail from './icon-database-fail.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconDatabaseFail.name = getComponentsPrefix() + _IconDatabaseFail.name;

const IconDatabaseFail = Object.assign(_IconDatabaseFail, {
  install: (app: App) => {
    app.component(_IconDatabaseFail.name, _IconDatabaseFail);
  }
});

export default IconDatabaseFail;