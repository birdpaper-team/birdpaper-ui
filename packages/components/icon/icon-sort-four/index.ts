import type { App } from 'vue';
import _IconSortFour from './icon-sort-four.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconSortFour.name = getComponentsPrefix() + _IconSortFour.name;

const IconSortFour = Object.assign(_IconSortFour, {
  install: (app: App) => {
    app.component(_IconSortFour.name, _IconSortFour);
  }
});

export default IconSortFour;