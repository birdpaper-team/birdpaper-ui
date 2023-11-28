import type { App } from 'vue';
import _IconIndeterminateCircleLine from './icon-indeterminate-circle-line.vue';

const IconIndeterminateCircleLine = Object.assign(_IconIndeterminateCircleLine, {
  install: (app: App) => {
    app.component(_IconIndeterminateCircleLine.name, _IconIndeterminateCircleLine);
  }
});

export default IconIndeterminateCircleLine;