import type { App } from 'vue';
import _IconTrademarkLine from './icon-trademark-line.vue';

const IconTrademarkLine = Object.assign(_IconTrademarkLine, {
  install: (app: App) => {
    app.component(_IconTrademarkLine.name, _IconTrademarkLine);
  }
});

export default IconTrademarkLine;