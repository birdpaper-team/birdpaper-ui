import type { App } from 'vue';
import _IconSendBackward from './icon-send-backward.vue';

const IconSendBackward = Object.assign(_IconSendBackward, {
  install: (app: App) => {
    app.component(_IconSendBackward.name, _IconSendBackward);
  }
});

export default IconSendBackward;