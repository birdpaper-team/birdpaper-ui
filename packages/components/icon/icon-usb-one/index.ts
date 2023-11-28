import type { App } from 'vue';
import _IconUsbOne from './icon-usb-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconUsbOne.name = getComponentsPrefix() + _IconUsbOne.name;

const IconUsbOne = Object.assign(_IconUsbOne, {
  install: (app: App) => {
    app.component(_IconUsbOne.name, _IconUsbOne);
  }
});

export default IconUsbOne;