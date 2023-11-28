import type { App } from 'vue';
import _IconPermissions from './icon-permissions.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconPermissions.name = getComponentsPrefix() + _IconPermissions.name;

const IconPermissions = Object.assign(_IconPermissions, {
  install: (app: App) => {
    app.component(_IconPermissions.name, _IconPermissions);
  }
});

export default IconPermissions;