import type { App } from 'vue';
import _IconSpaCandle from './icon-spa-candle.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconSpaCandle.name = getComponentsPrefix() + _IconSpaCandle.name;

const IconSpaCandle = Object.assign(_IconSpaCandle, {
  install: (app: App) => {
    app.component(_IconSpaCandle.name, _IconSpaCandle);
  }
});

export default IconSpaCandle;