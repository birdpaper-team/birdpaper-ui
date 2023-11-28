import type { App } from 'vue';
import _IconTeaDrink from './icon-tea-drink.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconTeaDrink.name = getComponentsPrefix() + _IconTeaDrink.name;

const IconTeaDrink = Object.assign(_IconTeaDrink, {
  install: (app: App) => {
    app.component(_IconTeaDrink.name, _IconTeaDrink);
  }
});

export default IconTeaDrink;