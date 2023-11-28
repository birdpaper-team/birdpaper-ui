import type { App } from 'vue';
import _IconBringForward from './icon-bring-forward.vue';

const IconBringForward = Object.assign(_IconBringForward, {
  install: (app: App) => {
    app.component(_IconBringForward.name, _IconBringForward);
  }
});

export default IconBringForward;