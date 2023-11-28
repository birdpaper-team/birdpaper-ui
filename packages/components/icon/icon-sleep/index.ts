import type { App } from 'vue';
import _IconSleep from './icon-sleep.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconSleep.name = getComponentsPrefix() + _IconSleep.name;

const IconSleep = Object.assign(_IconSleep, {
  install: (app: App) => {
    app.component(_IconSleep.name, _IconSleep);
  }
});

export default IconSleep;