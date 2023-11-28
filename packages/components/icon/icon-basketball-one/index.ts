import type { App } from 'vue';
import _IconBasketballOne from './icon-basketball-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconBasketballOne.name = getComponentsPrefix() + _IconBasketballOne.name;

const IconBasketballOne = Object.assign(_IconBasketballOne, {
  install: (app: App) => {
    app.component(_IconBasketballOne.name, _IconBasketballOne);
  }
});

export default IconBasketballOne;