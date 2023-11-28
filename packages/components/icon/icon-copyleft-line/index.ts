import type { App } from 'vue';
import _IconCopyleftLine from './icon-copyleft-line.vue';

const IconCopyleftLine = Object.assign(_IconCopyleftLine, {
  install: (app: App) => {
    app.component(_IconCopyleftLine.name, _IconCopyleftLine);
  }
});

export default IconCopyleftLine;