import type { App } from 'vue';
import _IconHeart3Line from './icon-heart-3-line.vue';

const IconHeart3Line = Object.assign(_IconHeart3Line, {
  install: (app: App) => {
    app.component(_IconHeart3Line.name, _IconHeart3Line);
  }
});

export default IconHeart3Line;