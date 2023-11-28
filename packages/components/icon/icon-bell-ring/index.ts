import type { App } from 'vue';
import _IconBellRing from './icon-bell-ring.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconBellRing.name = getComponentsPrefix() + _IconBellRing.name;

const IconBellRing = Object.assign(_IconBellRing, {
  install: (app: App) => {
    app.component(_IconBellRing.name, _IconBellRing);
  }
});

export default IconBellRing;