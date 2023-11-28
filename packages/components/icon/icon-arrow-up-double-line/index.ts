import type { App } from 'vue';
import _IconArrowUpDoubleLine from './icon-arrow-up-double-line.vue';

const IconArrowUpDoubleLine = Object.assign(_IconArrowUpDoubleLine, {
  install: (app: App) => {
    app.component(_IconArrowUpDoubleLine.name, _IconArrowUpDoubleLine);
  }
});

export default IconArrowUpDoubleLine;