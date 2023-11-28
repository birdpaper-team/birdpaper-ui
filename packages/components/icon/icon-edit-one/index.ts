import type { App } from 'vue';
import _IconEditOne from './icon-edit-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconEditOne.name = getComponentsPrefix() + _IconEditOne.name;

const IconEditOne = Object.assign(_IconEditOne, {
  install: (app: App) => {
    app.component(_IconEditOne.name, _IconEditOne);
  }
});

export default IconEditOne;