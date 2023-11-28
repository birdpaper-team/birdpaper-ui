import type { App } from 'vue';
import _IconIncomeOne from './icon-income-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconIncomeOne.name = getComponentsPrefix() + _IconIncomeOne.name;

const IconIncomeOne = Object.assign(_IconIncomeOne, {
  install: (app: App) => {
    app.component(_IconIncomeOne.name, _IconIncomeOne);
  }
});

export default IconIncomeOne;