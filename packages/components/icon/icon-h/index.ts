import type { App } from 'vue';
import _IconH from './icon-h.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconH.name = getComponentsPrefix() + _IconH.name;

const IconH = Object.assign(_IconH, {
  install: (app: App) => {
    app.component(_IconH.name, _IconH);
  }
});

export default IconH;