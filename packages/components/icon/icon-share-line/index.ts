import type { App } from 'vue';
import _IconShareLine from './icon-share-line.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconShareLine.name = getComponentsPrefix() + _IconShareLine.name;

const IconShareLine = Object.assign(_IconShareLine, {
  install: (app: App) => {
    app.component(_IconShareLine.name, _IconShareLine);
  }
});

export default IconShareLine;