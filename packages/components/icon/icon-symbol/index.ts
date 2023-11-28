import type { App } from 'vue';
import _IconSymbol from './icon-symbol.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconSymbol.name = getComponentsPrefix() + _IconSymbol.name;

const IconSymbol = Object.assign(_IconSymbol, {
  install: (app: App) => {
    app.component(_IconSymbol.name, _IconSymbol);
  }
});

export default IconSymbol;