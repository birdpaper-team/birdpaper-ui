import type { App } from 'vue';
import _IconShareCircleLine from './icon-share-circle-line.vue';

const IconShareCircleLine = Object.assign(_IconShareCircleLine, {
  install: (app: App) => {
    app.component(_IconShareCircleLine.name, _IconShareCircleLine);
  }
});

export default IconShareCircleLine;