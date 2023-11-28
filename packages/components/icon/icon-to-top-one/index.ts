import type { App } from 'vue';
import _IconToTopOne from './icon-to-top-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconToTopOne.name = getComponentsPrefix() + _IconToTopOne.name;

const IconToTopOne = Object.assign(_IconToTopOne, {
  install: (app: App) => {
    app.component(_IconToTopOne.name, _IconToTopOne);
  }
});

export default IconToTopOne;