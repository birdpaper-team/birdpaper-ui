import type { App } from 'vue';
import _IconFinancingOne from './icon-financing-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFinancingOne.name = getComponentsPrefix() + _IconFinancingOne.name;

const IconFinancingOne = Object.assign(_IconFinancingOne, {
  install: (app: App) => {
    app.component(_IconFinancingOne.name, _IconFinancingOne);
  }
});

export default IconFinancingOne;