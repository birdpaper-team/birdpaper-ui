import type { App } from 'vue';
import _IconFullscreenExitLine from './icon-fullscreen-exit-line.vue';

const IconFullscreenExitLine = Object.assign(_IconFullscreenExitLine, {
  install: (app: App) => {
    app.component(_IconFullscreenExitLine.name, _IconFullscreenExitLine);
  }
});

export default IconFullscreenExitLine;