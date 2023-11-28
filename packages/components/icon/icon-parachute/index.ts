import type { App } from 'vue';
import _IconParachute from './icon-parachute.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconParachute.name = getComponentsPrefix() + _IconParachute.name;

const IconParachute = Object.assign(_IconParachute, {
  install: (app: App) => {
    app.component(_IconParachute.name, _IconParachute);
  }
});

export default IconParachute;