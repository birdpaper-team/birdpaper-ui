import type { App } from 'vue';
import _IconFireworks from './icon-fireworks.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFireworks.name = getComponentsPrefix() + _IconFireworks.name;

const IconFireworks = Object.assign(_IconFireworks, {
  install: (app: App) => {
    app.component(_IconFireworks.name, _IconFireworks);
  }
});

export default IconFireworks;