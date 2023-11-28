import type { App } from 'vue';
import _IconBasketballStand from './icon-basketball-stand.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconBasketballStand.name = getComponentsPrefix() + _IconBasketballStand.name;

const IconBasketballStand = Object.assign(_IconBasketballStand, {
  install: (app: App) => {
    app.component(_IconBasketballStand.name, _IconBasketballStand);
  }
});

export default IconBasketballStand;