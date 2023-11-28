import type { App } from 'vue';
import _IconGirlOne from './icon-girl-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconGirlOne.name = getComponentsPrefix() + _IconGirlOne.name;

const IconGirlOne = Object.assign(_IconGirlOne, {
  install: (app: App) => {
    app.component(_IconGirlOne.name, _IconGirlOne);
  }
});

export default IconGirlOne;