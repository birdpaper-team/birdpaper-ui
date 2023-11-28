import type { App } from 'vue';
import _IconDistortion from './icon-distortion.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconDistortion.name = getComponentsPrefix() + _IconDistortion.name;

const IconDistortion = Object.assign(_IconDistortion, {
  install: (app: App) => {
    app.component(_IconDistortion.name, _IconDistortion);
  }
});

export default IconDistortion;