import type { App } from 'vue';
import _IconAlphabeticalSorting from './icon-alphabetical-sorting.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconAlphabeticalSorting.name = getComponentsPrefix() + _IconAlphabeticalSorting.name;

const IconAlphabeticalSorting = Object.assign(_IconAlphabeticalSorting, {
  install: (app: App) => {
    app.component(_IconAlphabeticalSorting.name, _IconAlphabeticalSorting);
  }
});

export default IconAlphabeticalSorting;