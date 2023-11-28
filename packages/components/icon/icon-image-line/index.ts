import type { App } from 'vue';
import _IconImageLine from './icon-image-line.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconImageLine.name = getComponentsPrefix() + _IconImageLine.name;

const IconImageLine = Object.assign(_IconImageLine, {
  install: (app: App) => {
    app.component(_IconImageLine.name, _IconImageLine);
  }
});

export default IconImageLine;