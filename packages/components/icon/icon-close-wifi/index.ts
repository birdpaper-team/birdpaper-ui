import type { App } from 'vue';
import _IconCloseWifi from './icon-close-wifi.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconCloseWifi.name = getComponentsPrefix() + _IconCloseWifi.name;

const IconCloseWifi = Object.assign(_IconCloseWifi, {
  install: (app: App) => {
    app.component(_IconCloseWifi.name, _IconCloseWifi);
  }
});

export default IconCloseWifi;