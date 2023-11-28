import type { App } from 'vue';
import _IconHeartLine from './icon-heart-line.vue';

const IconHeartLine = Object.assign(_IconHeartLine, {
  install: (app: App) => {
    app.component(_IconHeartLine.name, _IconHeartLine);
  }
});

export default IconHeartLine;