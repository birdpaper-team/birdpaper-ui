import type { App } from 'vue';
import _IconDatabaseSync from './icon-database-sync.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconDatabaseSync.name = getComponentsPrefix() + _IconDatabaseSync.name;

const IconDatabaseSync = Object.assign(_IconDatabaseSync, {
  install: (app: App) => {
    app.component(_IconDatabaseSync.name, _IconDatabaseSync);
  }
});

export default IconDatabaseSync;