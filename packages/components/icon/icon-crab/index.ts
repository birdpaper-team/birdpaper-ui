import type { App } from 'vue';
import _IconCrab from './icon-crab.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconCrab.name = getComponentsPrefix() + _IconCrab.name;

const IconCrab = Object.assign(_IconCrab, {
  install: (app: App) => {
    app.component(_IconCrab.name, _IconCrab);
  }
});

export default IconCrab;