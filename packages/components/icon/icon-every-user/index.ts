import type { App } from 'vue';
import _IconEveryUser from './icon-every-user.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconEveryUser.name = getComponentsPrefix() + _IconEveryUser.name;

const IconEveryUser = Object.assign(_IconEveryUser, {
  install: (app: App) => {
    app.component(_IconEveryUser.name, _IconEveryUser);
  }
});

export default IconEveryUser;