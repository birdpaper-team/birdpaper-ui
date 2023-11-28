import type { App } from 'vue';
import _IconPlayListAddLine from './icon-play-list-add-line.vue';

const IconPlayListAddLine = Object.assign(_IconPlayListAddLine, {
  install: (app: App) => {
    app.component(_IconPlayListAddLine.name, _IconPlayListAddLine);
  }
});

export default IconPlayListAddLine;