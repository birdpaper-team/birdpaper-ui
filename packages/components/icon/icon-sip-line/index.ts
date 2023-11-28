import type { App } from 'vue';
import _IconSipLine from './icon-sip-line.vue';

const IconSipLine = Object.assign(_IconSipLine, {
  install: (app: App) => {
    app.component(_IconSipLine.name, _IconSipLine);
  }
});

export default IconSipLine;