import type { App } from 'vue';
import _IconContrast from './icon-contrast.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconContrast.name = getComponentsPrefix() + _IconContrast.name;

const IconContrast = Object.assign(_IconContrast, {
  install: (app: App) => {
    app.component(_IconContrast.name, _IconContrast);
  }
});

export default IconContrast;