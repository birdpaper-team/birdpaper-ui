import type { App } from 'vue';
import _IconIronTwo from './icon-iron-two.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconIronTwo.name = getComponentsPrefix() + _IconIronTwo.name;

const IconIronTwo = Object.assign(_IconIronTwo, {
  install: (app: App) => {
    app.component(_IconIronTwo.name, _IconIronTwo);
  }
});

export default IconIronTwo;