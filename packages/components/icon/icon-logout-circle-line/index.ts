import type { App } from 'vue';
import _IconLogoutCircleLine from './icon-logout-circle-line.vue';

const IconLogoutCircleLine = Object.assign(_IconLogoutCircleLine, {
  install: (app: App) => {
    app.component(_IconLogoutCircleLine.name, _IconLogoutCircleLine);
  }
});

export default IconLogoutCircleLine;