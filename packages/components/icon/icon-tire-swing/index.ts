import type { App } from 'vue';
import _IconTireSwing from './icon-tire-swing.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconTireSwing.name = getComponentsPrefix() + _IconTireSwing.name;

const IconTireSwing = Object.assign(_IconTireSwing, {
  install: (app: App) => {
    app.component(_IconTireSwing.name, _IconTireSwing);
  }
});

export default IconTireSwing;