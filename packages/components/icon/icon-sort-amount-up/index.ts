import type { App } from 'vue';
import _IconSortAmountUp from './icon-sort-amount-up.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconSortAmountUp.name = getComponentsPrefix() + _IconSortAmountUp.name;

const IconSortAmountUp = Object.assign(_IconSortAmountUp, {
  install: (app: App) => {
    app.component(_IconSortAmountUp.name, _IconSortAmountUp);
  }
});

export default IconSortAmountUp;