import type { App } from 'vue';
import _IconClothesGlovesTwo from './icon-clothes-gloves-two.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconClothesGlovesTwo.name = getComponentsPrefix() + _IconClothesGlovesTwo.name;

const IconClothesGlovesTwo = Object.assign(_IconClothesGlovesTwo, {
  install: (app: App) => {
    app.component(_IconClothesGlovesTwo.name, _IconClothesGlovesTwo);
  }
});

export default IconClothesGlovesTwo;