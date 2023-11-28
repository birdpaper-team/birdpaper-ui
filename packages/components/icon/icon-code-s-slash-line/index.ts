import type { App } from 'vue';
import _IconCodeSSlashLine from './icon-code-s-slash-line.vue';

const IconCodeSSlashLine = Object.assign(_IconCodeSSlashLine, {
  install: (app: App) => {
    app.component(_IconCodeSSlashLine.name, _IconCodeSSlashLine);
  }
});

export default IconCodeSSlashLine;