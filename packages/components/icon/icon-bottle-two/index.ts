import type { App } from 'vue';
import _IconBottleTwo from './icon-bottle-two.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconBottleTwo.name = getComponentsPrefix() + _IconBottleTwo.name;

const IconBottleTwo = Object.assign(_IconBottleTwo, {
  install: (app: App) => {
    app.component(_IconBottleTwo.name, _IconBottleTwo);
  }
});

export default IconBottleTwo;