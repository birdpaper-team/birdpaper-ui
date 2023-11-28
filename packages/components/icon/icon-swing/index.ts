import type { App } from 'vue';
import _IconSwing from './icon-swing.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconSwing.name = getComponentsPrefix() + _IconSwing.name;

const IconSwing = Object.assign(_IconSwing, {
  install: (app: App) => {
    app.component(_IconSwing.name, _IconSwing);
  }
});

export default IconSwing;