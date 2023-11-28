import type { App } from 'vue';
import _IconDeer from './icon-deer.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconDeer.name = getComponentsPrefix() + _IconDeer.name;

const IconDeer = Object.assign(_IconDeer, {
  install: (app: App) => {
    app.component(_IconDeer.name, _IconDeer);
  }
});

export default IconDeer;