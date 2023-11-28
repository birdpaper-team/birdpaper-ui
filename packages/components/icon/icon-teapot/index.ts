import type { App } from 'vue';
import _IconTeapot from './icon-teapot.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconTeapot.name = getComponentsPrefix() + _IconTeapot.name;

const IconTeapot = Object.assign(_IconTeapot, {
  install: (app: App) => {
    app.component(_IconTeapot.name, _IconTeapot);
  }
});

export default IconTeapot;