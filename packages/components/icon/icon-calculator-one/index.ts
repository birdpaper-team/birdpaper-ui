import type { App } from 'vue';
import _IconCalculatorOne from './icon-calculator-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconCalculatorOne.name = getComponentsPrefix() + _IconCalculatorOne.name;

const IconCalculatorOne = Object.assign(_IconCalculatorOne, {
  install: (app: App) => {
    app.component(_IconCalculatorOne.name, _IconCalculatorOne);
  }
});

export default IconCalculatorOne;