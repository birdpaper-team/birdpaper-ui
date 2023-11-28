import type { App } from 'vue';
import _IconVuejsFill from './icon-vuejs-fill.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconVuejsFill.name = getComponentsPrefix() + _IconVuejsFill.name;

const IconVuejsFill = Object.assign(_IconVuejsFill, {
  install: (app: App) => {
    app.component(_IconVuejsFill.name, _IconVuejsFill);
  }
});

export default IconVuejsFill;