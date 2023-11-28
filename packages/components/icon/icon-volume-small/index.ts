import type { App } from 'vue';
import _IconVolumeSmall from './icon-volume-small.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconVolumeSmall.name = getComponentsPrefix() + _IconVolumeSmall.name;

const IconVolumeSmall = Object.assign(_IconVolumeSmall, {
  install: (app: App) => {
    app.component(_IconVolumeSmall.name, _IconVolumeSmall);
  }
});

export default IconVolumeSmall;