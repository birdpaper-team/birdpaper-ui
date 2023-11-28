import type { App } from 'vue';
import _IconSecurity from './icon-security.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconSecurity.name = getComponentsPrefix() + _IconSecurity.name;

const IconSecurity = Object.assign(_IconSecurity, {
  install: (app: App) => {
    app.component(_IconSecurity.name, _IconSecurity);
  }
});

export default IconSecurity;