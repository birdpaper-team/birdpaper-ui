import type { App } from 'vue';
import _IconDatabaseConfig from './icon-database-config.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconDatabaseConfig.name = getComponentsPrefix() + _IconDatabaseConfig.name;

const IconDatabaseConfig = Object.assign(_IconDatabaseConfig, {
  install: (app: App) => {
    app.component(_IconDatabaseConfig.name, _IconDatabaseConfig);
  }
});

export default IconDatabaseConfig;