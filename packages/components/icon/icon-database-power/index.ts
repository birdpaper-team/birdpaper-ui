import type { App } from 'vue';
import _IconDatabasePower from './icon-database-power.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconDatabasePower.name = getComponentsPrefix() + _IconDatabasePower.name;

const IconDatabasePower = Object.assign(_IconDatabasePower, {
  install: (app: App) => {
    app.component(_IconDatabasePower.name, _IconDatabasePower);
  }
});

export default IconDatabasePower;