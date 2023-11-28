import type { App } from 'vue';
import _IconDrink from './icon-drink.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconDrink.name = getComponentsPrefix() + _IconDrink.name;

const IconDrink = Object.assign(_IconDrink, {
  install: (app: App) => {
    app.component(_IconDrink.name, _IconDrink);
  }
});

export default IconDrink;