import type { App } from 'vue';
import _IconBee from './icon-bee.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconBee.name = getComponentsPrefix() + _IconBee.name;

const IconBee = Object.assign(_IconBee, {
  install: (app: App) => {
    app.component(_IconBee.name, _IconBee);
  }
});

export default IconBee;