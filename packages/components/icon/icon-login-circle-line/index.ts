import type { App } from 'vue';
import _IconLoginCircleLine from './icon-login-circle-line.vue';

const IconLoginCircleLine = Object.assign(_IconLoginCircleLine, {
  install: (app: App) => {
    app.component(_IconLoginCircleLine.name, _IconLoginCircleLine);
  }
});

export default IconLoginCircleLine;