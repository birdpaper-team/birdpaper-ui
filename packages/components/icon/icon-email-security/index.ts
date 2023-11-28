import type { App } from 'vue';
import _IconEmailSecurity from './icon-email-security.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconEmailSecurity.name = getComponentsPrefix() + _IconEmailSecurity.name;

const IconEmailSecurity = Object.assign(_IconEmailSecurity, {
  install: (app: App) => {
    app.component(_IconEmailSecurity.name, _IconEmailSecurity);
  }
});

export default IconEmailSecurity;