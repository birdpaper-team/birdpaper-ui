import type { App } from 'vue';
import _IconCactus from './icon-cactus.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconCactus.name = getComponentsPrefix() + _IconCactus.name;

const IconCactus = Object.assign(_IconCactus, {
  install: (app: App) => {
    app.component(_IconCactus.name, _IconCactus);
  }
});

export default IconCactus;