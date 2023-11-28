import type { App } from 'vue';
import _IconEdit2Line from './icon-edit-2-line.vue';

const IconEdit2Line = Object.assign(_IconEdit2Line, {
  install: (app: App) => {
    app.component(_IconEdit2Line.name, _IconEdit2Line);
  }
});

export default IconEdit2Line;