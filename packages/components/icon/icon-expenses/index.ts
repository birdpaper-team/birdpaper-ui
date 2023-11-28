import type { App } from 'vue';
import _IconExpenses from './icon-expenses.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconExpenses.name = getComponentsPrefix() + _IconExpenses.name;

const IconExpenses = Object.assign(_IconExpenses, {
  install: (app: App) => {
    app.component(_IconExpenses.name, _IconExpenses);
  }
});

export default IconExpenses;