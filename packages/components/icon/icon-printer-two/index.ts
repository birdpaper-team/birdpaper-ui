import type { App } from 'vue';
import _IconPrinterTwo from './icon-printer-two.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconPrinterTwo.name = getComponentsPrefix() + _IconPrinterTwo.name;

const IconPrinterTwo = Object.assign(_IconPrinterTwo, {
  install: (app: App) => {
    app.component(_IconPrinterTwo.name, _IconPrinterTwo);
  }
});

export default IconPrinterTwo;