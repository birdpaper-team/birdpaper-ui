import type { App } from 'vue';
import _IconPlaneLine from './icon-plane-line.vue';

const IconPlaneLine = Object.assign(_IconPlaneLine, {
  install: (app: App) => {
    app.component(_IconPlaneLine.name, _IconPlaneLine);
  }
});

export default IconPlaneLine;