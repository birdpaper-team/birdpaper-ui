import type { App } from 'vue';
import _IconLoader2Line from './icon-loader-2-line.vue';

const IconLoader2Line = Object.assign(_IconLoader2Line, {
  install: (app: App) => {
    app.component(_IconLoader2Line.name, _IconLoader2Line);
  }
});

export default IconLoader2Line;