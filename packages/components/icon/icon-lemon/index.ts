import type { App } from 'vue';
import _IconLemon from './icon-lemon.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconLemon.name = getComponentsPrefix() + _IconLemon.name;

const IconLemon = Object.assign(_IconLemon, {
  install: (app: App) => {
    app.component(_IconLemon.name, _IconLemon);
  }
});

export default IconLemon;