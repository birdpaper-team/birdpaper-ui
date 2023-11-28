import type { App } from 'vue';
import _IconPointOut from './icon-point-out.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconPointOut.name = getComponentsPrefix() + _IconPointOut.name;

const IconPointOut = Object.assign(_IconPointOut, {
  install: (app: App) => {
    app.component(_IconPointOut.name, _IconPointOut);
  }
});

export default IconPointOut;