import type { App } from 'vue';
import _IconDvi from './icon-dvi.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconDvi.name = getComponentsPrefix() + _IconDvi.name;

const IconDvi = Object.assign(_IconDvi, {
  install: (app: App) => {
    app.component(_IconDvi.name, _IconDvi);
  }
});

export default IconDvi;