import type { App } from 'vue';
import _IconClothesShortSleeve from './icon-clothes-short-sleeve.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconClothesShortSleeve.name = getComponentsPrefix() + _IconClothesShortSleeve.name;

const IconClothesShortSleeve = Object.assign(_IconClothesShortSleeve, {
  install: (app: App) => {
    app.component(_IconClothesShortSleeve.name, _IconClothesShortSleeve);
  }
});

export default IconClothesShortSleeve;