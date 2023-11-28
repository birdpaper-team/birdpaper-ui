import type { App } from 'vue';
import _IconSunLine from './icon-sun-line.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconSunLine.name = getComponentsPrefix() + _IconSunLine.name;

const IconSunLine = Object.assign(_IconSunLine, {
  install: (app: App) => {
    app.component(_IconSunLine.name, _IconSunLine);
  }
});

export default IconSunLine;