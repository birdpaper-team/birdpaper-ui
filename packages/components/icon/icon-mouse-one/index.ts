import type { App } from 'vue';
import _IconMouseOne from './icon-mouse-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconMouseOne.name = getComponentsPrefix() + _IconMouseOne.name;

const IconMouseOne = Object.assign(_IconMouseOne, {
  install: (app: App) => {
    app.component(_IconMouseOne.name, _IconMouseOne);
  }
});

export default IconMouseOne;