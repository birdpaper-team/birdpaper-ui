import type { App } from 'vue';
import _IconApplicationOne from './icon-application-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconApplicationOne.name = getComponentsPrefix() + _IconApplicationOne.name;

const IconApplicationOne = Object.assign(_IconApplicationOne, {
  install: (app: App) => {
    app.component(_IconApplicationOne.name, _IconApplicationOne);
  }
});

export default IconApplicationOne;