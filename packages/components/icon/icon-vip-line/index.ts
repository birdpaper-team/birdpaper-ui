import type { App } from 'vue';
import _IconVipLine from './icon-vip-line.vue';

const IconVipLine = Object.assign(_IconVipLine, {
  install: (app: App) => {
    app.component(_IconVipLine.name, _IconVipLine);
  }
});

export default IconVipLine;