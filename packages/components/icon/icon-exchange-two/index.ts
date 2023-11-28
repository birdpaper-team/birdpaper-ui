import type { App } from 'vue';
import _IconExchangeTwo from './icon-exchange-two.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconExchangeTwo.name = getComponentsPrefix() + _IconExchangeTwo.name;

const IconExchangeTwo = Object.assign(_IconExchangeTwo, {
  install: (app: App) => {
    app.component(_IconExchangeTwo.name, _IconExchangeTwo);
  }
});

export default IconExchangeTwo;