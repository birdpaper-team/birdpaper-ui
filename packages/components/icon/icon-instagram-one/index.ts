import type { App } from 'vue';
import _IconInstagramOne from './icon-instagram-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconInstagramOne.name = getComponentsPrefix() + _IconInstagramOne.name;

const IconInstagramOne = Object.assign(_IconInstagramOne, {
  install: (app: App) => {
    app.component(_IconInstagramOne.name, _IconInstagramOne);
  }
});

export default IconInstagramOne;