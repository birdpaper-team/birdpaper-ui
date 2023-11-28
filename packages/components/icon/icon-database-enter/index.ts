import type { App } from 'vue';
import _IconDatabaseEnter from './icon-database-enter.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconDatabaseEnter.name = getComponentsPrefix() + _IconDatabaseEnter.name;

const IconDatabaseEnter = Object.assign(_IconDatabaseEnter, {
  install: (app: App) => {
    app.component(_IconDatabaseEnter.name, _IconDatabaseEnter);
  }
});

export default IconDatabaseEnter;