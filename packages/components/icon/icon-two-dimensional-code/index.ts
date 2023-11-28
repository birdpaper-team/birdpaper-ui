import type { App } from 'vue';
import _IconTwoDimensionalCode from './icon-two-dimensional-code.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconTwoDimensionalCode.name = getComponentsPrefix() + _IconTwoDimensionalCode.name;

const IconTwoDimensionalCode = Object.assign(_IconTwoDimensionalCode, {
  install: (app: App) => {
    app.component(_IconTwoDimensionalCode.name, _IconTwoDimensionalCode);
  }
});

export default IconTwoDimensionalCode;