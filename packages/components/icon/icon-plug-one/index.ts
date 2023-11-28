import type { App } from 'vue';
import _IconPlugOne from './icon-plug-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconPlugOne.name = getComponentsPrefix() + _IconPlugOne.name;

const IconPlugOne = Object.assign(_IconPlugOne, {
  install: (app: App) => {
    app.component(_IconPlugOne.name, _IconPlugOne);
  }
});

export default IconPlugOne;