import type { App } from 'vue';
import _IconCryingBaby from './icon-crying-baby.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconCryingBaby.name = getComponentsPrefix() + _IconCryingBaby.name;

const IconCryingBaby = Object.assign(_IconCryingBaby, {
  install: (app: App) => {
    app.component(_IconCryingBaby.name, _IconCryingBaby);
  }
});

export default IconCryingBaby;