import type { App } from 'vue';
import _IconBasketball from './icon-basketball.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconBasketball.name = getComponentsPrefix() + _IconBasketball.name;

const IconBasketball = Object.assign(_IconBasketball, {
  install: (app: App) => {
    app.component(_IconBasketball.name, _IconBasketball);
  }
});

export default IconBasketball;