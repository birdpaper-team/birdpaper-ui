import type { App } from 'vue';
import _IconInstagram from './icon-instagram.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconInstagram.name = getComponentsPrefix() + _IconInstagram.name;

const IconInstagram = Object.assign(_IconInstagram, {
  install: (app: App) => {
    app.component(_IconInstagram.name, _IconInstagram);
  }
});

export default IconInstagram;