import type { App } from 'vue';
import _IconFan from './icon-fan.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFan.name = getComponentsPrefix() + _IconFan.name;

const IconFan = Object.assign(_IconFan, {
  install: (app: App) => {
    app.component(_IconFan.name, _IconFan);
  }
});

export default IconFan;