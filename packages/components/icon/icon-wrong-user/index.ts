import type { App } from 'vue';
import _IconWrongUser from './icon-wrong-user.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconWrongUser.name = getComponentsPrefix() + _IconWrongUser.name;

const IconWrongUser = Object.assign(_IconWrongUser, {
  install: (app: App) => {
    app.component(_IconWrongUser.name, _IconWrongUser);
  }
});

export default IconWrongUser;