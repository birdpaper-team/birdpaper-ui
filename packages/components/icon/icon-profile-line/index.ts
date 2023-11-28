import type { App } from 'vue';
import _IconProfileLine from './icon-profile-line.vue';

const IconProfileLine = Object.assign(_IconProfileLine, {
  install: (app: App) => {
    app.component(_IconProfileLine.name, _IconProfileLine);
  }
});

export default IconProfileLine;