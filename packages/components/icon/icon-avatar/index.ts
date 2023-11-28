import type { App } from 'vue';
import _IconAvatar from './icon-avatar.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconAvatar.name = getComponentsPrefix() + _IconAvatar.name;

const IconAvatar = Object.assign(_IconAvatar, {
  install: (app: App) => {
    app.component(_IconAvatar.name, _IconAvatar);
  }
});

export default IconAvatar;