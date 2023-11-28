import type { App } from 'vue';
import _IconTwitterXLine from './icon-twitter-x-line.vue';

const IconTwitterXLine = Object.assign(_IconTwitterXLine, {
  install: (app: App) => {
    app.component(_IconTwitterXLine.name, _IconTwitterXLine);
  }
});

export default IconTwitterXLine;