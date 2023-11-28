import type { App } from 'vue';
import _IconPencilLine from './icon-pencil-line.vue';

const IconPencilLine = Object.assign(_IconPencilLine, {
  install: (app: App) => {
    app.component(_IconPencilLine.name, _IconPencilLine);
  }
});

export default IconPencilLine;