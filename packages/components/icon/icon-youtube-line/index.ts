import type { App } from 'vue';
import _IconYoutubeLine from './icon-youtube-line.vue';

const IconYoutubeLine = Object.assign(_IconYoutubeLine, {
  install: (app: App) => {
    app.component(_IconYoutubeLine.name, _IconYoutubeLine);
  }
});

export default IconYoutubeLine;