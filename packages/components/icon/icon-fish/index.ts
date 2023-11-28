import type { App } from 'vue';
import _IconFish from './icon-fish.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFish.name = getComponentsPrefix() + _IconFish.name;

const IconFish = Object.assign(_IconFish, {
  install: (app: App) => {
    app.component(_IconFish.name, _IconFish);
  }
});

export default IconFish;