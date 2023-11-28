import type { App } from 'vue';
import _IconDatabaseCode from './icon-database-code.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconDatabaseCode.name = getComponentsPrefix() + _IconDatabaseCode.name;

const IconDatabaseCode = Object.assign(_IconDatabaseCode, {
  install: (app: App) => {
    app.component(_IconDatabaseCode.name, _IconDatabaseCode);
  }
});

export default IconDatabaseCode;