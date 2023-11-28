import type { App } from 'vue';
import _IconFullScreenOne from './icon-full-screen-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFullScreenOne.name = getComponentsPrefix() + _IconFullScreenOne.name;

const IconFullScreenOne = Object.assign(_IconFullScreenOne, {
  install: (app: App) => {
    app.component(_IconFullScreenOne.name, _IconFullScreenOne);
  }
});

export default IconFullScreenOne;