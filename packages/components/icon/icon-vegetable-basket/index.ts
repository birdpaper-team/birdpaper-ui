import type { App } from 'vue';
import _IconVegetableBasket from './icon-vegetable-basket.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconVegetableBasket.name = getComponentsPrefix() + _IconVegetableBasket.name;

const IconVegetableBasket = Object.assign(_IconVegetableBasket, {
  install: (app: App) => {
    app.component(_IconVegetableBasket.name, _IconVegetableBasket);
  }
});

export default IconVegetableBasket;