import type { App } from 'vue';
import _IconUsbMicroTwo from './icon-usb-micro-two.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconUsbMicroTwo.name = getComponentsPrefix() + _IconUsbMicroTwo.name;

const IconUsbMicroTwo = Object.assign(_IconUsbMicroTwo, {
  install: (app: App) => {
    app.component(_IconUsbMicroTwo.name, _IconUsbMicroTwo);
  }
});

export default IconUsbMicroTwo;