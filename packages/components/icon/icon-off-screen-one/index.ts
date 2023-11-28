import type { App } from 'vue';
import _IconOffScreenOne from './icon-off-screen-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconOffScreenOne.name = getComponentsPrefix() + _IconOffScreenOne.name;

const IconOffScreenOne = Object.assign(_IconOffScreenOne, {
  install: (app: App) => {
    app.component(_IconOffScreenOne.name, _IconOffScreenOne);
  }
});

export default IconOffScreenOne;