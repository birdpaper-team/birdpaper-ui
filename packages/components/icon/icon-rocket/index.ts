import type { App } from 'vue';
import _IconRocket from './icon-rocket.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconRocket.name = getComponentsPrefix() + _IconRocket.name;

const IconRocket = Object.assign(_IconRocket, {
  install: (app: App) => {
    app.component(_IconRocket.name, _IconRocket);
  }
});

export default IconRocket;