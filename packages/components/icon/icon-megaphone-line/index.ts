import type { App } from 'vue';
import _IconMegaphoneLine from './icon-megaphone-line.vue';

const IconMegaphoneLine = Object.assign(_IconMegaphoneLine, {
  install: (app: App) => {
    app.component(_IconMegaphoneLine.name, _IconMegaphoneLine);
  }
});

export default IconMegaphoneLine;