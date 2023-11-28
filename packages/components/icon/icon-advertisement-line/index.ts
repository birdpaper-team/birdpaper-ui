import type { App } from 'vue';
import _IconAdvertisementLine from './icon-advertisement-line.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconAdvertisementLine.name = getComponentsPrefix() + _IconAdvertisementLine.name;

const IconAdvertisementLine = Object.assign(_IconAdvertisementLine, {
  install: (app: App) => {
    app.component(_IconAdvertisementLine.name, _IconAdvertisementLine);
  }
});

export default IconAdvertisementLine;