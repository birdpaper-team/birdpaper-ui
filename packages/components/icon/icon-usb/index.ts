import type { App } from 'vue';
import _IconUsb from './icon-usb.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconUsb.name = getComponentsPrefix() + _IconUsb.name;

const IconUsb = Object.assign(_IconUsb, {
  install: (app: App) => {
    app.component(_IconUsb.name, _IconUsb);
  }
});

export default IconUsb;