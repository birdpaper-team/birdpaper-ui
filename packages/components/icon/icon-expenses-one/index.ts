import type { App } from 'vue';
import _IconExpensesOne from './icon-expenses-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconExpensesOne.name = getComponentsPrefix() + _IconExpensesOne.name;

const IconExpensesOne = Object.assign(_IconExpensesOne, {
  install: (app: App) => {
    app.component(_IconExpensesOne.name, _IconExpensesOne);
  }
});

export default IconExpensesOne;