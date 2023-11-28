import type { App } from 'vue';
import _IconMessage3Line from './icon-message-3-line.vue';

const IconMessage3Line = Object.assign(_IconMessage3Line, {
  install: (app: App) => {
    app.component(_IconMessage3Line.name, _IconMessage3Line);
  }
});

export default IconMessage3Line;