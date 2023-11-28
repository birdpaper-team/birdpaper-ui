import type { App } from 'vue';
import _IconFileTextOne from './icon-file-text-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFileTextOne.name = getComponentsPrefix() + _IconFileTextOne.name;

const IconFileTextOne = Object.assign(_IconFileTextOne, {
  install: (app: App) => {
    app.component(_IconFileTextOne.name, _IconFileTextOne);
  }
});

export default IconFileTextOne;