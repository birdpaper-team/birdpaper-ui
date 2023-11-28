import type { App } from 'vue';
import _IconPrinterLine from './icon-printer-line.vue';

const IconPrinterLine = Object.assign(_IconPrinterLine, {
  install: (app: App) => {
    app.component(_IconPrinterLine.name, _IconPrinterLine);
  }
});

export default IconPrinterLine;