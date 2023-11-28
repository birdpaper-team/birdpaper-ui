import type { App } from 'vue';
import _IconBringToFront from './icon-bring-to-front.vue';

const IconBringToFront = Object.assign(_IconBringToFront, {
  install: (app: App) => {
    app.component(_IconBringToFront.name, _IconBringToFront);
  }
});

export default IconBringToFront;