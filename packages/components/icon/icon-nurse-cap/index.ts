import type { App } from 'vue';
import _IconNurseCap from './icon-nurse-cap.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconNurseCap.name = getComponentsPrefix() + _IconNurseCap.name;

const IconNurseCap = Object.assign(_IconNurseCap, {
  install: (app: App) => {
    app.component(_IconNurseCap.name, _IconNurseCap);
  }
});

export default IconNurseCap;