import type { App } from 'vue';
import _IconSwitchTrack from './icon-switch-track.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconSwitchTrack.name = getComponentsPrefix() + _IconSwitchTrack.name;

const IconSwitchTrack = Object.assign(_IconSwitchTrack, {
  install: (app: App) => {
    app.component(_IconSwitchTrack.name, _IconSwitchTrack);
  }
});

export default IconSwitchTrack;