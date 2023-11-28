import type { App } from 'vue';
import _IconSortAmountDown from './icon-sort-amount-down.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconSortAmountDown.name = getComponentsPrefix() + _IconSortAmountDown.name;

const IconSortAmountDown = Object.assign(_IconSortAmountDown, {
  install: (app: App) => {
    app.component(_IconSortAmountDown.name, _IconSortAmountDown);
  }
});

export default IconSortAmountDown;