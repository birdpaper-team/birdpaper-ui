import type { App } from 'vue';
import _IconChafingDish from './icon-chafing-dish.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconChafingDish.name = getComponentsPrefix() + _IconChafingDish.name;

const IconChafingDish = Object.assign(_IconChafingDish, {
  install: (app: App) => {
    app.component(_IconChafingDish.name, _IconChafingDish);
  }
});

export default IconChafingDish;