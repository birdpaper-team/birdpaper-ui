import type { App } from 'vue';
import _IconH2 from './icon-h2.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconH2.name = getComponentsPrefix() + _IconH2.name;

const IconH2 = Object.assign(_IconH2, {
  install: (app: App) => {
    app.component(_IconH2.name, _IconH2);
  }
});

export default IconH2;