import type { App } from 'vue';
import _IconPushpinLine from './icon-pushpin-line.vue';

const IconPushpinLine = Object.assign(_IconPushpinLine, {
  install: (app: App) => {
    app.component(_IconPushpinLine.name, _IconPushpinLine);
  }
});

export default IconPushpinLine;