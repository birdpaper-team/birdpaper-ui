import type { App } from 'vue';
import _IconUsbMemoryStick from './icon-usb-memory-stick.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconUsbMemoryStick.name = getComponentsPrefix() + _IconUsbMemoryStick.name;

const IconUsbMemoryStick = Object.assign(_IconUsbMemoryStick, {
  install: (app: App) => {
    app.component(_IconUsbMemoryStick.name, _IconUsbMemoryStick);
  }
});

export default IconUsbMemoryStick;