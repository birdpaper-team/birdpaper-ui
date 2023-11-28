import type { App } from 'vue';
import _IconUnpinLine from './icon-unpin-line.vue';

const IconUnpinLine = Object.assign(_IconUnpinLine, {
  install: (app: App) => {
    app.component(_IconUnpinLine.name, _IconUnpinLine);
  }
});

export default IconUnpinLine;