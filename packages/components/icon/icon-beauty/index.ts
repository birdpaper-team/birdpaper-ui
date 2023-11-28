import type { App } from 'vue';
import _IconBeauty from './icon-beauty.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconBeauty.name = getComponentsPrefix() + _IconBeauty.name;

const IconBeauty = Object.assign(_IconBeauty, {
  install: (app: App) => {
    app.component(_IconBeauty.name, _IconBeauty);
  }
});

export default IconBeauty;