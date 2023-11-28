import type { App } from 'vue';
import _IconAddUser from './icon-add-user.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconAddUser.name = getComponentsPrefix() + _IconAddUser.name;

const IconAddUser = Object.assign(_IconAddUser, {
  install: (app: App) => {
    app.component(_IconAddUser.name, _IconAddUser);
  }
});

export default IconAddUser;