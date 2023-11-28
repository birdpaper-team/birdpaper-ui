import type { App } from 'vue';
import _IconSettings4Line from './icon-settings-4-line.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconSettings4Line.name = getComponentsPrefix() + _IconSettings4Line.name;

const IconSettings4Line = Object.assign(_IconSettings4Line, {
  install: (app: App) => {
    app.component(_IconSettings4Line.name, _IconSettings4Line);
  }
});

export default IconSettings4Line;