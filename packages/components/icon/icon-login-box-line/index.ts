import type { App } from 'vue';
import _IconLoginBoxLine from './icon-login-box-line.vue';

const IconLoginBoxLine = Object.assign(_IconLoginBoxLine, {
  install: (app: App) => {
    app.component(_IconLoginBoxLine.name, _IconLoginBoxLine);
  }
});

export default IconLoginBoxLine;