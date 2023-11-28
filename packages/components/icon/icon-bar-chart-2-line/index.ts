import type { App } from 'vue';
import _IconBarChart2Line from './icon-bar-chart-2-line.vue';

const IconBarChart2Line = Object.assign(_IconBarChart2Line, {
  install: (app: App) => {
    app.component(_IconBarChart2Line.name, _IconBarChart2Line);
  }
});

export default IconBarChart2Line;