import type { App } from 'vue';
import _IconSortTwo from './icon-sort-two.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconSortTwo.name = getComponentsPrefix() + _IconSortTwo.name;

const IconSortTwo = Object.assign(_IconSortTwo, {
  install: (app: App) => {
    app.component(_IconSortTwo.name, _IconSortTwo);
  }
});

export default IconSortTwo;