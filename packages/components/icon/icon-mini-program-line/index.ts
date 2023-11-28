import type { App } from 'vue';
import _IconMiniProgramLine from './icon-mini-program-line.vue';

const IconMiniProgramLine = Object.assign(_IconMiniProgramLine, {
  install: (app: App) => {
    app.component(_IconMiniProgramLine.name, _IconMiniProgramLine);
  }
});

export default IconMiniProgramLine;