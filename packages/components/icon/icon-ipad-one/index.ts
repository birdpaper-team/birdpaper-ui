import type { App } from 'vue';
import _IconIpadOne from './icon-ipad-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconIpadOne.name = getComponentsPrefix() + _IconIpadOne.name;

const IconIpadOne = Object.assign(_IconIpadOne, {
  install: (app: App) => {
    app.component(_IconIpadOne.name, _IconIpadOne);
  }
});

export default IconIpadOne;