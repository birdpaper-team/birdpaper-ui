import type { App } from 'vue';
import _IconSunny from './icon-sunny.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconSunny.name = getComponentsPrefix() + _IconSunny.name;

const IconSunny = Object.assign(_IconSunny, {
  install: (app: App) => {
    app.component(_IconSunny.name, _IconSunny);
  }
});

export default IconSunny;