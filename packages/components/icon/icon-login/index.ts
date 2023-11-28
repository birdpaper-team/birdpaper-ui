import type { App } from 'vue';
import _IconLogin from './icon-login.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconLogin.name = getComponentsPrefix() + _IconLogin.name;

const IconLogin = Object.assign(_IconLogin, {
  install: (app: App) => {
    app.component(_IconLogin.name, _IconLogin);
  }
});

export default IconLogin;