import type { App } from 'vue';
import _IconCalculator from './icon-calculator.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconCalculator.name = getComponentsPrefix() + _IconCalculator.name;

const IconCalculator = Object.assign(_IconCalculator, {
  install: (app: App) => {
    app.component(_IconCalculator.name, _IconCalculator);
  }
});

export default IconCalculator;