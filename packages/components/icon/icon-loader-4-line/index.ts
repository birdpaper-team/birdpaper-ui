import type { App } from 'vue';
import _IconLoader4Line from './icon-loader-4-line.vue';

const IconLoader4Line = Object.assign(_IconLoader4Line, {
  install: (app: App) => {
    app.component(_IconLoader4Line.name, _IconLoader4Line);
  }
});

export default IconLoader4Line;