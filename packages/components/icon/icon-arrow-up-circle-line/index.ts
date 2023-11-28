import type { App } from 'vue';
import _IconArrowUpCircleLine from './icon-arrow-up-circle-line.vue';

const IconArrowUpCircleLine = Object.assign(_IconArrowUpCircleLine, {
  install: (app: App) => {
    app.component(_IconArrowUpCircleLine.name, _IconArrowUpCircleLine);
  }
});

export default IconArrowUpCircleLine;