import type { App } from 'vue';
import _IconUsbMicroOne from './icon-usb-micro-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconUsbMicroOne.name = getComponentsPrefix() + _IconUsbMicroOne.name;

const IconUsbMicroOne = Object.assign(_IconUsbMicroOne, {
  install: (app: App) => {
    app.component(_IconUsbMicroOne.name, _IconUsbMicroOne);
  }
});

export default IconUsbMicroOne;