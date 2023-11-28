import type { App } from 'vue';
import _IconAddLine from './icon-add-line.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconAddLine.name = getComponentsPrefix() + _IconAddLine.name;

const IconAddLine = Object.assign(_IconAddLine, {
  install: (app: App) => {
    app.component(_IconAddLine.name, _IconAddLine);
  }
});

export default IconAddLine;