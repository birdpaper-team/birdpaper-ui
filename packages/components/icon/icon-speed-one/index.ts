import type { App } from 'vue';
import _IconSpeedOne from './icon-speed-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconSpeedOne.name = getComponentsPrefix() + _IconSpeedOne.name;

const IconSpeedOne = Object.assign(_IconSpeedOne, {
  install: (app: App) => {
    app.component(_IconSpeedOne.name, _IconSpeedOne);
  }
});

export default IconSpeedOne;