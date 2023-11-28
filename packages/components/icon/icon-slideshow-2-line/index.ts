import type { App } from 'vue';
import _IconSlideshow2Line from './icon-slideshow-2-line.vue';

const IconSlideshow2Line = Object.assign(_IconSlideshow2Line, {
  install: (app: App) => {
    app.component(_IconSlideshow2Line.name, _IconSlideshow2Line);
  }
});

export default IconSlideshow2Line;