import type { App } from 'vue';
import _IconLamp from './icon-lamp.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconLamp.name = getComponentsPrefix() + _IconLamp.name;

const IconLamp = Object.assign(_IconLamp, {
  install: (app: App) => {
    app.component(_IconLamp.name, _IconLamp);
  }
});

export default IconLamp;