import type { App } from 'vue';
import _IconTwoDimensionalCodeTwo from './icon-two-dimensional-code-two.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconTwoDimensionalCodeTwo.name = getComponentsPrefix() + _IconTwoDimensionalCodeTwo.name;

const IconTwoDimensionalCodeTwo = Object.assign(_IconTwoDimensionalCodeTwo, {
  install: (app: App) => {
    app.component(_IconTwoDimensionalCodeTwo.name, _IconTwoDimensionalCodeTwo);
  }
});

export default IconTwoDimensionalCodeTwo;