import type { App } from 'vue';
import _IconArrowRightDoubleLine from './icon-arrow-right-double-line.vue';

const IconArrowRightDoubleLine = Object.assign(_IconArrowRightDoubleLine, {
  install: (app: App) => {
    app.component(_IconArrowRightDoubleLine.name, _IconArrowRightDoubleLine);
  }
});

export default IconArrowRightDoubleLine;