import type { App } from 'vue';
import _IconFullscreenLine from './icon-fullscreen-line.vue';

const IconFullscreenLine = Object.assign(_IconFullscreenLine, {
  install: (app: App) => {
    app.component(_IconFullscreenLine.name, _IconFullscreenLine);
  }
});

export default IconFullscreenLine;