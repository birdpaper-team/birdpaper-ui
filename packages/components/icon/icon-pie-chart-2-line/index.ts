import type { App } from 'vue';
import _IconPieChart2Line from './icon-pie-chart-2-line.vue';

const IconPieChart2Line = Object.assign(_IconPieChart2Line, {
  install: (app: App) => {
    app.component(_IconPieChart2Line.name, _IconPieChart2Line);
  }
});

export default IconPieChart2Line;