import type { App } from 'vue';
import _IconArchery from './icon-archery.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconArchery.name = getComponentsPrefix() + _IconArchery.name;

const IconArchery = Object.assign(_IconArchery, {
  install: (app: App) => {
    app.component(_IconArchery.name, _IconArchery);
  }
});

export default IconArchery;