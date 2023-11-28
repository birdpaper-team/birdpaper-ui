import type { App } from 'vue';
import _IconInbox2Line from './icon-inbox-2-line.vue';

const IconInbox2Line = Object.assign(_IconInbox2Line, {
  install: (app: App) => {
    app.component(_IconInbox2Line.name, _IconInbox2Line);
  }
});

export default IconInbox2Line;