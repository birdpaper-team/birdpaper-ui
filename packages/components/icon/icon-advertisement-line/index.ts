import type { App } from 'vue';
import _IconAdvertisementLine from './icon-advertisement-line.vue';

const IconAdvertisementLine = Object.assign(_IconAdvertisementLine, {
  install: (app: App) => {
    app.component(_IconAdvertisementLine.name, _IconAdvertisementLine);
  }
});

export default IconAdvertisementLine;