import type { App } from 'vue';
import _IconSymbolDoubleX from './icon-symbol-double-x.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconSymbolDoubleX.name = getComponentsPrefix() + _IconSymbolDoubleX.name;

const IconSymbolDoubleX = Object.assign(_IconSymbolDoubleX, {
  install: (app: App) => {
    app.component(_IconSymbolDoubleX.name, _IconSymbolDoubleX);
  }
});

export default IconSymbolDoubleX;