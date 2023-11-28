import type { App } from 'vue';
import _IconDatabaseTime from './icon-database-time.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconDatabaseTime.name = getComponentsPrefix() + _IconDatabaseTime.name;

const IconDatabaseTime = Object.assign(_IconDatabaseTime, {
  install: (app: App) => {
    app.component(_IconDatabaseTime.name, _IconDatabaseTime);
  }
});

export default IconDatabaseTime;