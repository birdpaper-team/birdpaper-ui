import type { App } from 'vue';
import _IconPrinter from './icon-printer.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconPrinter.name = getComponentsPrefix() + _IconPrinter.name;

const IconPrinter = Object.assign(_IconPrinter, {
  install: (app: App) => {
    app.component(_IconPrinter.name, _IconPrinter);
  }
});

export default IconPrinter;