import type { App } from 'vue';
import _IconRocketLine from './icon-rocket-line.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconRocketLine.name = getComponentsPrefix() + _IconRocketLine.name;

const IconRocketLine = Object.assign(_IconRocketLine, {
  install: (app: App) => {
    app.component(_IconRocketLine.name, _IconRocketLine);
  }
});

export default IconRocketLine;