import type { App } from 'vue';
import _IconEyeCloseLine from './icon-eye-close-line.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconEyeCloseLine.name = getComponentsPrefix() + _IconEyeCloseLine.name;

const IconEyeCloseLine = Object.assign(_IconEyeCloseLine, {
  install: (app: App) => {
    app.component(_IconEyeCloseLine.name, _IconEyeCloseLine);
  }
});

export default IconEyeCloseLine;