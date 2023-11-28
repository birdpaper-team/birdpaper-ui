import type { App } from 'vue';
import _IconUser from './icon-user.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconUser.name = getComponentsPrefix() + _IconUser.name;

const IconUser = Object.assign(_IconUser, {
  install: (app: App) => {
    app.component(_IconUser.name, _IconUser);
  }
});

export default IconUser;