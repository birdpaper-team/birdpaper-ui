import type { App } from 'vue';
import _IconVolumeMute from './icon-volume-mute.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconVolumeMute.name = getComponentsPrefix() + _IconVolumeMute.name;

const IconVolumeMute = Object.assign(_IconVolumeMute, {
  install: (app: App) => {
    app.component(_IconVolumeMute.name, _IconVolumeMute);
  }
});

export default IconVolumeMute;