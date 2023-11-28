import type { App } from 'vue';
import _IconWindowLine from './icon-window-line.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconWindowLine.name = getComponentsPrefix() + _IconWindowLine.name;

const IconWindowLine = Object.assign(_IconWindowLine, {
  install: (app: App) => {
    app.component(_IconWindowLine.name, _IconWindowLine);
  }
});

export default IconWindowLine;