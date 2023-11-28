import type { App } from 'vue';
import _IconCat from './icon-cat.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconCat.name = getComponentsPrefix() + _IconCat.name;

const IconCat = Object.assign(_IconCat, {
  install: (app: App) => {
    app.component(_IconCat.name, _IconCat);
  }
});

export default IconCat;