import type { App } from 'vue';
import _IconFrigate from './icon-frigate.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFrigate.name = getComponentsPrefix() + _IconFrigate.name;

const IconFrigate = Object.assign(_IconFrigate, {
  install: (app: App) => {
    app.component(_IconFrigate.name, _IconFrigate);
  }
});

export default IconFrigate;