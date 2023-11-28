import type { App } from 'vue';
import _IconClothesSkates from './icon-clothes-skates.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconClothesSkates.name = getComponentsPrefix() + _IconClothesSkates.name;

const IconClothesSkates = Object.assign(_IconClothesSkates, {
  install: (app: App) => {
    app.component(_IconClothesSkates.name, _IconClothesSkates);
  }
});

export default IconClothesSkates;