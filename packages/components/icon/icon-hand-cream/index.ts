import type { App } from 'vue';
import _IconHandCream from './icon-hand-cream.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconHandCream.name = getComponentsPrefix() + _IconHandCream.name;

const IconHandCream = Object.assign(_IconHandCream, {
  install: (app: App) => {
    app.component(_IconHandCream.name, _IconHandCream);
  }
});

export default IconHandCream;