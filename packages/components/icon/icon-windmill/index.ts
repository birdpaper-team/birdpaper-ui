import type { App } from 'vue';
import _IconWindmill from './icon-windmill.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconWindmill.name = getComponentsPrefix() + _IconWindmill.name;

const IconWindmill = Object.assign(_IconWindmill, {
  install: (app: App) => {
    app.component(_IconWindmill.name, _IconWindmill);
  }
});

export default IconWindmill;