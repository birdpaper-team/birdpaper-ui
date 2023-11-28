import type { App } from 'vue';
import _IconSendToBack from './icon-send-to-back.vue';

const IconSendToBack = Object.assign(_IconSendToBack, {
  install: (app: App) => {
    app.component(_IconSendToBack.name, _IconSendToBack);
  }
});

export default IconSendToBack;