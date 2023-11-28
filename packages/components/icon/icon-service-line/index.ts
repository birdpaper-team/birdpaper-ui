import type { App } from 'vue';
import _IconServiceLine from './icon-service-line.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconServiceLine.name = getComponentsPrefix() + _IconServiceLine.name;

const IconServiceLine = Object.assign(_IconServiceLine, {
  install: (app: App) => {
    app.component(_IconServiceLine.name, _IconServiceLine);
  }
});

export default IconServiceLine;