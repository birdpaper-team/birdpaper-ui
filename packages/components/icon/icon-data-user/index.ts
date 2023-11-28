import type { App } from 'vue';
import _IconDataUser from './icon-data-user.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconDataUser.name = getComponentsPrefix() + _IconDataUser.name;

const IconDataUser = Object.assign(_IconDataUser, {
  install: (app: App) => {
    app.component(_IconDataUser.name, _IconDataUser);
  }
});

export default IconDataUser;