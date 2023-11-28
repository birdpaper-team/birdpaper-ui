import type { App } from 'vue';
import _IconDatabaseForbid from './icon-database-forbid.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconDatabaseForbid.name = getComponentsPrefix() + _IconDatabaseForbid.name;

const IconDatabaseForbid = Object.assign(_IconDatabaseForbid, {
  install: (app: App) => {
    app.component(_IconDatabaseForbid.name, _IconDatabaseForbid);
  }
});

export default IconDatabaseForbid;