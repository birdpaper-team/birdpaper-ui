import type { App } from 'vue';
import _IconVegetables from './icon-vegetables.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconVegetables.name = getComponentsPrefix() + _IconVegetables.name;

const IconVegetables = Object.assign(_IconVegetables, {
  install: (app: App) => {
    app.component(_IconVegetables.name, _IconVegetables);
  }
});

export default IconVegetables;