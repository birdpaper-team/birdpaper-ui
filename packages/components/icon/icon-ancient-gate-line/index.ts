import type { App } from 'vue';
import _IconAncientGateLine from './icon-ancient-gate-line.vue';

const IconAncientGateLine = Object.assign(_IconAncientGateLine, {
  install: (app: App) => {
    app.component(_IconAncientGateLine.name, _IconAncientGateLine);
  }
});

export default IconAncientGateLine;