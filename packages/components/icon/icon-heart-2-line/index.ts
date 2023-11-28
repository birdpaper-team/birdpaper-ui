import type { App } from 'vue';
import _IconHeart2Line from './icon-heart-2-line.vue';

const IconHeart2Line = Object.assign(_IconHeart2Line, {
  install: (app: App) => {
    app.component(_IconHeart2Line.name, _IconHeart2Line);
  }
});

export default IconHeart2Line;