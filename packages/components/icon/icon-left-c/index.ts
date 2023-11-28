import type { App } from 'vue';
import _IconLeftC from './icon-left-c.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconLeftC.name = getComponentsPrefix() + _IconLeftC.name;

const IconLeftC = Object.assign(_IconLeftC, {
  install: (app: App) => {
    app.component(_IconLeftC.name, _IconLeftC);
  }
});

export default IconLeftC;