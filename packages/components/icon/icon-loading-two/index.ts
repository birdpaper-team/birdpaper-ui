import type { App } from 'vue';
import _IconLoadingTwo from './icon-loading-two.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconLoadingTwo.name = getComponentsPrefix() + _IconLoadingTwo.name;

const IconLoadingTwo = Object.assign(_IconLoadingTwo, {
  install: (app: App) => {
    app.component(_IconLoadingTwo.name, _IconLoadingTwo);
  }
});

export default IconLoadingTwo;