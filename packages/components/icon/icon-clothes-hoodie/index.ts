import type { App } from 'vue';
import _IconClothesHoodie from './icon-clothes-hoodie.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconClothesHoodie.name = getComponentsPrefix() + _IconClothesHoodie.name;

const IconClothesHoodie = Object.assign(_IconClothesHoodie, {
  install: (app: App) => {
    app.component(_IconClothesHoodie.name, _IconClothesHoodie);
  }
});

export default IconClothesHoodie;