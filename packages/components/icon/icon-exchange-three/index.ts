import type { App } from 'vue';
import _IconExchangeThree from './icon-exchange-three.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconExchangeThree.name = getComponentsPrefix() + _IconExchangeThree.name;

const IconExchangeThree = Object.assign(_IconExchangeThree, {
  install: (app: App) => {
    app.component(_IconExchangeThree.name, _IconExchangeThree);
  }
});

export default IconExchangeThree;