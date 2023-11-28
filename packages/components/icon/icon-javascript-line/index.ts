import type { App } from 'vue';
import _IconJavascriptLine from './icon-javascript-line.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconJavascriptLine.name = getComponentsPrefix() + _IconJavascriptLine.name;

const IconJavascriptLine = Object.assign(_IconJavascriptLine, {
  install: (app: App) => {
    app.component(_IconJavascriptLine.name, _IconJavascriptLine);
  }
});

export default IconJavascriptLine;