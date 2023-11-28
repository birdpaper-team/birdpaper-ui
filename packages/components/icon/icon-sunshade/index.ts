import type { App } from 'vue';
import _IconSunshade from './icon-sunshade.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconSunshade.name = getComponentsPrefix() + _IconSunshade.name;

const IconSunshade = Object.assign(_IconSunshade, {
  install: (app: App) => {
    app.component(_IconSunshade.name, _IconSunshade);
  }
});

export default IconSunshade;