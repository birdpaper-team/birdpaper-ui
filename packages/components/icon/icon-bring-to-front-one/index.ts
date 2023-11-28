import type { App } from 'vue';
import _IconBringToFrontOne from './icon-bring-to-front-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconBringToFrontOne.name = getComponentsPrefix() + _IconBringToFrontOne.name;

const IconBringToFrontOne = Object.assign(_IconBringToFrontOne, {
  install: (app: App) => {
    app.component(_IconBringToFrontOne.name, _IconBringToFrontOne);
  }
});

export default IconBringToFrontOne;