import type { App } from 'vue';
import _IconContrastViewCircle from './icon-contrast-view-circle.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconContrastViewCircle.name = getComponentsPrefix() + _IconContrastViewCircle.name;

const IconContrastViewCircle = Object.assign(_IconContrastViewCircle, {
  install: (app: App) => {
    app.component(_IconContrastViewCircle.name, _IconContrastViewCircle);
  }
});

export default IconContrastViewCircle;