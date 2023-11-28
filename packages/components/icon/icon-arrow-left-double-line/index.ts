import type { App } from 'vue';
import _IconArrowLeftDoubleLine from './icon-arrow-left-double-line.vue';

const IconArrowLeftDoubleLine = Object.assign(_IconArrowLeftDoubleLine, {
  install: (app: App) => {
    app.component(_IconArrowLeftDoubleLine.name, _IconArrowLeftDoubleLine);
  }
});

export default IconArrowLeftDoubleLine;