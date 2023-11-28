import type { App } from 'vue';
import _IconArrowDownDoubleLine from './icon-arrow-down-double-line.vue';

const IconArrowDownDoubleLine = Object.assign(_IconArrowDownDoubleLine, {
  install: (app: App) => {
    app.component(_IconArrowDownDoubleLine.name, _IconArrowDownDoubleLine);
  }
});

export default IconArrowDownDoubleLine;