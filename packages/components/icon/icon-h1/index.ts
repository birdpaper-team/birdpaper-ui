import type { App } from 'vue';
import _IconH1 from './icon-h1.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconH1.name = getComponentsPrefix() + _IconH1.name;

const IconH1 = Object.assign(_IconH1, {
  install: (app: App) => {
    app.component(_IconH1.name, _IconH1);
  }
});

export default IconH1;