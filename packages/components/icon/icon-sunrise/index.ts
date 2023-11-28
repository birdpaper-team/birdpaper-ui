import type { App } from 'vue';
import _IconSunrise from './icon-sunrise.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconSunrise.name = getComponentsPrefix() + _IconSunrise.name;

const IconSunrise = Object.assign(_IconSunrise, {
  install: (app: App) => {
    app.component(_IconSunrise.name, _IconSunrise);
  }
});

export default IconSunrise;