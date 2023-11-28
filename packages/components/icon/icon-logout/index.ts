import type { App } from 'vue';
import _IconLogout from './icon-logout.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconLogout.name = getComponentsPrefix() + _IconLogout.name;

const IconLogout = Object.assign(_IconLogout, {
  install: (app: App) => {
    app.component(_IconLogout.name, _IconLogout);
  }
});

export default IconLogout;