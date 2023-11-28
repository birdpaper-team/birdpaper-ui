import type { App } from 'vue';
import _IconEyeFill from './icon-eye-fill.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconEyeFill.name = getComponentsPrefix() + _IconEyeFill.name;

const IconEyeFill = Object.assign(_IconEyeFill, {
  install: (app: App) => {
    app.component(_IconEyeFill.name, _IconEyeFill);
  }
});

export default IconEyeFill;