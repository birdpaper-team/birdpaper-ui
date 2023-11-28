import type { App } from 'vue';
import _IconLogoutBoxLine from './icon-logout-box-line.vue';

const IconLogoutBoxLine = Object.assign(_IconLogoutBoxLine, {
  install: (app: App) => {
    app.component(_IconLogoutBoxLine.name, _IconLogoutBoxLine);
  }
});

export default IconLogoutBoxLine;