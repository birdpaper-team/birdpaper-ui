import type { App } from 'vue';
import _IconJavascriptLine from './icon-javascript-line.vue';

const IconJavascriptLine = Object.assign(_IconJavascriptLine, {
  install: (app: App) => {
    app.component(_IconJavascriptLine.name, _IconJavascriptLine);
  }
});

export default IconJavascriptLine;