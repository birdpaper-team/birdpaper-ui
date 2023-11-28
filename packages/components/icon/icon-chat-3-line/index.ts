import type { App } from 'vue';
import _IconChat3Line from './icon-chat-3-line.vue';

const IconChat3Line = Object.assign(_IconChat3Line, {
  install: (app: App) => {
    app.component(_IconChat3Line.name, _IconChat3Line);
  }
});

export default IconChat3Line;