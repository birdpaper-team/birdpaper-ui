import type { App } from 'vue';
import _IconAlphabeticalSortingTwo from './icon-alphabetical-sorting-two.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconAlphabeticalSortingTwo.name = getComponentsPrefix() + _IconAlphabeticalSortingTwo.name;

const IconAlphabeticalSortingTwo = Object.assign(_IconAlphabeticalSortingTwo, {
  install: (app: App) => {
    app.component(_IconAlphabeticalSortingTwo.name, _IconAlphabeticalSortingTwo);
  }
});

export default IconAlphabeticalSortingTwo;