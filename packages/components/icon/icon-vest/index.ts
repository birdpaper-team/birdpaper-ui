import type { App } from 'vue';
import _IconVest from './icon-vest.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconVest.name = getComponentsPrefix() + _IconVest.name;

const IconVest = Object.assign(_IconVest, {
  install: (app: App) => {
    app.component(_IconVest.name, _IconVest);
  }
});

export default IconVest;