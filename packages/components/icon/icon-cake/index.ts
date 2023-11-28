import type { App } from 'vue';
import _IconCake from './icon-cake.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconCake.name = getComponentsPrefix() + _IconCake.name;

const IconCake = Object.assign(_IconCake, {
  install: (app: App) => {
    app.component(_IconCake.name, _IconCake);
  }
});

export default IconCake;