import type { App } from 'vue';
import _IconMoon from './icon-moon.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconMoon.name = getComponentsPrefix() + _IconMoon.name;

const IconMoon = Object.assign(_IconMoon, {
  install: (app: App) => {
    app.component(_IconMoon.name, _IconMoon);
  }
});

export default IconMoon;