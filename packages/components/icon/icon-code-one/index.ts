import type { App } from 'vue';
import _IconCodeOne from './icon-code-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconCodeOne.name = getComponentsPrefix() + _IconCodeOne.name;

const IconCodeOne = Object.assign(_IconCodeOne, {
  install: (app: App) => {
    app.component(_IconCodeOne.name, _IconCodeOne);
  }
});

export default IconCodeOne;