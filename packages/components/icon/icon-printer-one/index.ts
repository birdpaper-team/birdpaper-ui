import type { App } from 'vue';
import _IconPrinterOne from './icon-printer-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconPrinterOne.name = getComponentsPrefix() + _IconPrinterOne.name;

const IconPrinterOne = Object.assign(_IconPrinterOne, {
  install: (app: App) => {
    app.component(_IconPrinterOne.name, _IconPrinterOne);
  }
});

export default IconPrinterOne;