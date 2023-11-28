import type { App } from 'vue';
import _IconReduceUser from './icon-reduce-user.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconReduceUser.name = getComponentsPrefix() + _IconReduceUser.name;

const IconReduceUser = Object.assign(_IconReduceUser, {
  install: (app: App) => {
    app.component(_IconReduceUser.name, _IconReduceUser);
  }
});

export default IconReduceUser;