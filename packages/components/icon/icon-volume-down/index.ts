import type { App } from 'vue';
import _IconVolumeDown from './icon-volume-down.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconVolumeDown.name = getComponentsPrefix() + _IconVolumeDown.name;

const IconVolumeDown = Object.assign(_IconVolumeDown, {
  install: (app: App) => {
    app.component(_IconVolumeDown.name, _IconVolumeDown);
  }
});

export default IconVolumeDown;