import type { App } from 'vue';
import _IconEyeCloseFill from './icon-eye-close-fill.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconEyeCloseFill.name = getComponentsPrefix() + _IconEyeCloseFill.name;

const IconEyeCloseFill = Object.assign(_IconEyeCloseFill, {
  install: (app: App) => {
    app.component(_IconEyeCloseFill.name, _IconEyeCloseFill);
  }
});

export default IconEyeCloseFill;