import type { App } from 'vue';
import _IconClothesWindbreaker from './icon-clothes-windbreaker.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconClothesWindbreaker.name = getComponentsPrefix() + _IconClothesWindbreaker.name;

const IconClothesWindbreaker = Object.assign(_IconClothesWindbreaker, {
  install: (app: App) => {
    app.component(_IconClothesWindbreaker.name, _IconClothesWindbreaker);
  }
});

export default IconClothesWindbreaker;