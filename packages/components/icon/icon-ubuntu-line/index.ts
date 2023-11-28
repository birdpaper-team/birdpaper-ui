import type { App } from 'vue';
import _IconUbuntuLine from './icon-ubuntu-line.vue';

const IconUbuntuLine = Object.assign(_IconUbuntuLine, {
  install: (app: App) => {
    app.component(_IconUbuntuLine.name, _IconUbuntuLine);
  }
});

export default IconUbuntuLine;