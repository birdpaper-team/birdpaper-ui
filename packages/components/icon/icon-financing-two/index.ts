import type { App } from 'vue';
import _IconFinancingTwo from './icon-financing-two.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFinancingTwo.name = getComponentsPrefix() + _IconFinancingTwo.name;

const IconFinancingTwo = Object.assign(_IconFinancingTwo, {
  install: (app: App) => {
    app.component(_IconFinancingTwo.name, _IconFinancingTwo);
  }
});

export default IconFinancingTwo;