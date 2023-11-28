import type { App } from 'vue';
import _IconAiming from './icon-aiming.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconAiming.name = getComponentsPrefix() + _IconAiming.name;

const IconAiming = Object.assign(_IconAiming, {
  install: (app: App) => {
    app.component(_IconAiming.name, _IconAiming);
  }
});

export default IconAiming;