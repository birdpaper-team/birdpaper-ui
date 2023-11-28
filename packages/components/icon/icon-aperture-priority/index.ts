import type { App } from 'vue';
import _IconAperturePriority from './icon-aperture-priority.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconAperturePriority.name = getComponentsPrefix() + _IconAperturePriority.name;

const IconAperturePriority = Object.assign(_IconAperturePriority, {
  install: (app: App) => {
    app.component(_IconAperturePriority.name, _IconAperturePriority);
  }
});

export default IconAperturePriority;