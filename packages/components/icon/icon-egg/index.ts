import type { App } from 'vue';
import _IconEgg from './icon-egg.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconEgg.name = getComponentsPrefix() + _IconEgg.name;

const IconEgg = Object.assign(_IconEgg, {
  install: (app: App) => {
    app.component(_IconEgg.name, _IconEgg);
  }
});

export default IconEgg;