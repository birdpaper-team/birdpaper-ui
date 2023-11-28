import type { App } from 'vue';
import _IconYuqueLine from './icon-yuque-line.vue';

const IconYuqueLine = Object.assign(_IconYuqueLine, {
  install: (app: App) => {
    app.component(_IconYuqueLine.name, _IconYuqueLine);
  }
});

export default IconYuqueLine;