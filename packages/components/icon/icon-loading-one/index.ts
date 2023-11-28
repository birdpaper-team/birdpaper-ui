import type { App } from 'vue';
import _IconLoadingOne from './icon-loading-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconLoadingOne.name = getComponentsPrefix() + _IconLoadingOne.name;

const IconLoadingOne = Object.assign(_IconLoadingOne, {
  install: (app: App) => {
    app.component(_IconLoadingOne.name, _IconLoadingOne);
  }
});

export default IconLoadingOne;