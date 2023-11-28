import type { App } from 'vue';
import _IconLoader5Line from './icon-loader-5-line.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconLoader5Line.name = getComponentsPrefix() + _IconLoader5Line.name;

const IconLoader5Line = Object.assign(_IconLoader5Line, {
  install: (app: App) => {
    app.component(_IconLoader5Line.name, _IconLoader5Line);
  }
});

export default IconLoader5Line;