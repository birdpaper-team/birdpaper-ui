import type { App } from 'vue';
import _IconButterfly from './icon-butterfly.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconButterfly.name = getComponentsPrefix() + _IconButterfly.name;

const IconButterfly = Object.assign(_IconButterfly, {
  install: (app: App) => {
    app.component(_IconButterfly.name, _IconButterfly);
  }
});

export default IconButterfly;