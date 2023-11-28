import type { App } from 'vue';
import _IconMute from './icon-mute.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconMute.name = getComponentsPrefix() + _IconMute.name;

const IconMute = Object.assign(_IconMute, {
  install: (app: App) => {
    app.component(_IconMute.name, _IconMute);
  }
});

export default IconMute;