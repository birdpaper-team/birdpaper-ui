import type { App } from 'vue';
import _IconClothesGloves from './icon-clothes-gloves.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconClothesGloves.name = getComponentsPrefix() + _IconClothesGloves.name;

const IconClothesGloves = Object.assign(_IconClothesGloves, {
  install: (app: App) => {
    app.component(_IconClothesGloves.name, _IconClothesGloves);
  }
});

export default IconClothesGloves;