import type { App } from 'vue';
import _IconMetaLine from './icon-meta-line.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconMetaLine.name = getComponentsPrefix() + _IconMetaLine.name;

const IconMetaLine = Object.assign(_IconMetaLine, {
  install: (app: App) => {
    app.component(_IconMetaLine.name, _IconMetaLine);
  }
});

export default IconMetaLine;