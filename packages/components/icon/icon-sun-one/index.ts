import type { App } from 'vue';
import _IconSunOne from './icon-sun-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconSunOne.name = getComponentsPrefix() + _IconSunOne.name;

const IconSunOne = Object.assign(_IconSunOne, {
  install: (app: App) => {
    app.component(_IconSunOne.name, _IconSunOne);
  }
});

export default IconSunOne;