import type { App } from 'vue';
import _IconWindmillOne from './icon-windmill-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconWindmillOne.name = getComponentsPrefix() + _IconWindmillOne.name;

const IconWindmillOne = Object.assign(_IconWindmillOne, {
  install: (app: App) => {
    app.component(_IconWindmillOne.name, _IconWindmillOne);
  }
});

export default IconWindmillOne;