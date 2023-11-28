import type { App } from 'vue';
import _IconFileCodeOne from './icon-file-code-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFileCodeOne.name = getComponentsPrefix() + _IconFileCodeOne.name;

const IconFileCodeOne = Object.assign(_IconFileCodeOne, {
  install: (app: App) => {
    app.component(_IconFileCodeOne.name, _IconFileCodeOne);
  }
});

export default IconFileCodeOne;