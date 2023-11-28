import type { App } from 'vue';
import _IconMagnet from './icon-magnet.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconMagnet.name = getComponentsPrefix() + _IconMagnet.name;

const IconMagnet = Object.assign(_IconMagnet, {
  install: (app: App) => {
    app.component(_IconMagnet.name, _IconMagnet);
  }
});

export default IconMagnet;