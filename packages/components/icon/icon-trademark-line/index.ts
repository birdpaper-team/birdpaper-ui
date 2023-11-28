import type { App } from 'vue';
import _IconTrademarkLine from './icon-trademark-line.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconTrademarkLine.name = getComponentsPrefix() + _IconTrademarkLine.name;

const IconTrademarkLine = Object.assign(_IconTrademarkLine, {
  install: (app: App) => {
    app.component(_IconTrademarkLine.name, _IconTrademarkLine);
  }
});

export default IconTrademarkLine;