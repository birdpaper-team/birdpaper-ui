import type { App } from 'vue';
import _IconEggplant from './icon-eggplant.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconEggplant.name = getComponentsPrefix() + _IconEggplant.name;

const IconEggplant = Object.assign(_IconEggplant, {
  install: (app: App) => {
    app.component(_IconEggplant.name, _IconEggplant);
  }
});

export default IconEggplant;