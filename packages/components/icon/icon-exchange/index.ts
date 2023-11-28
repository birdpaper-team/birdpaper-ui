import type { App } from 'vue';
import _IconExchange from './icon-exchange.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconExchange.name = getComponentsPrefix() + _IconExchange.name;

const IconExchange = Object.assign(_IconExchange, {
  install: (app: App) => {
    app.component(_IconExchange.name, _IconExchange);
  }
});

export default IconExchange;