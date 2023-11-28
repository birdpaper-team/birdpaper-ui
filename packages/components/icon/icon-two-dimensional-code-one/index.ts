import type { App } from 'vue';
import _IconTwoDimensionalCodeOne from './icon-two-dimensional-code-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconTwoDimensionalCodeOne.name = getComponentsPrefix() + _IconTwoDimensionalCodeOne.name;

const IconTwoDimensionalCodeOne = Object.assign(_IconTwoDimensionalCodeOne, {
  install: (app: App) => {
    app.component(_IconTwoDimensionalCodeOne.name, _IconTwoDimensionalCodeOne);
  }
});

export default IconTwoDimensionalCodeOne;