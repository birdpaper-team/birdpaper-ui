import type { App } from 'vue';
import _IconCheese from './icon-cheese.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconCheese.name = getComponentsPrefix() + _IconCheese.name;

const IconCheese = Object.assign(_IconCheese, {
  install: (app: App) => {
    app.component(_IconCheese.name, _IconCheese);
  }
});

export default IconCheese;