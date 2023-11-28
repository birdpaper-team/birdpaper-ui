import type { App } from 'vue';
import _IconMessageSecurity from './icon-message-security.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconMessageSecurity.name = getComponentsPrefix() + _IconMessageSecurity.name;

const IconMessageSecurity = Object.assign(_IconMessageSecurity, {
  install: (app: App) => {
    app.component(_IconMessageSecurity.name, _IconMessageSecurity);
  }
});

export default IconMessageSecurity;