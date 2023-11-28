import type { App } from 'vue';
import _IconRocket2Line from './icon-rocket-2-line.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconRocket2Line.name = getComponentsPrefix() + _IconRocket2Line.name;

const IconRocket2Line = Object.assign(_IconRocket2Line, {
  install: (app: App) => {
    app.component(_IconRocket2Line.name, _IconRocket2Line);
  }
});

export default IconRocket2Line;