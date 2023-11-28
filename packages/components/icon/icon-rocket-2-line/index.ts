import type { App } from 'vue';
import _IconRocket2Line from './icon-rocket-2-line.vue';

const IconRocket2Line = Object.assign(_IconRocket2Line, {
  install: (app: App) => {
    app.component(_IconRocket2Line.name, _IconRocket2Line);
  }
});

export default IconRocket2Line;