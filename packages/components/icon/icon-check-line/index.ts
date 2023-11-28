import type { App } from 'vue';
import _IconCheckLine from './icon-check-line.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconCheckLine.name = getComponentsPrefix() + _IconCheckLine.name;

const IconCheckLine = Object.assign(_IconCheckLine, {
  install: (app: App) => {
    app.component(_IconCheckLine.name, _IconCheckLine);
  }
});

export default IconCheckLine;