import type { App } from 'vue';
import _IconDomeLight from './icon-dome-light.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconDomeLight.name = getComponentsPrefix() + _IconDomeLight.name;

const IconDomeLight = Object.assign(_IconDomeLight, {
  install: (app: App) => {
    app.component(_IconDomeLight.name, _IconDomeLight);
  }
});

export default IconDomeLight;