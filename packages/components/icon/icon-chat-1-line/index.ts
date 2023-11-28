import type { App } from 'vue';
import _IconChat1Line from './icon-chat-1-line.vue';

const IconChat1Line = Object.assign(_IconChat1Line, {
  install: (app: App) => {
    app.component(_IconChat1Line.name, _IconChat1Line);
  }
});

export default IconChat1Line;