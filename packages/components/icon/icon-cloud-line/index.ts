import type { App } from 'vue';
import _IconCloudLine from './icon-cloud-line.vue';

const IconCloudLine = Object.assign(_IconCloudLine, {
  install: (app: App) => {
    app.component(_IconCloudLine.name, _IconCloudLine);
  }
});

export default IconCloudLine;