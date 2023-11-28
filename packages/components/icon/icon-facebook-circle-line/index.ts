import type { App } from 'vue';
import _IconFacebookCircleLine from './icon-facebook-circle-line.vue';

const IconFacebookCircleLine = Object.assign(_IconFacebookCircleLine, {
  install: (app: App) => {
    app.component(_IconFacebookCircleLine.name, _IconFacebookCircleLine);
  }
});

export default IconFacebookCircleLine;