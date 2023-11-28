import type { App } from 'vue';
import _IconVolumeUp from './icon-volume-up.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconVolumeUp.name = getComponentsPrefix() + _IconVolumeUp.name;

const IconVolumeUp = Object.assign(_IconVolumeUp, {
  install: (app: App) => {
    app.component(_IconVolumeUp.name, _IconVolumeUp);
  }
});

export default IconVolumeUp;