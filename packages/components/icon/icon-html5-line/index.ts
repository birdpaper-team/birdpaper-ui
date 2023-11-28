import type { App } from 'vue';
import _IconHtml5Line from './icon-html5-line.vue';

const IconHtml5Line = Object.assign(_IconHtml5Line, {
  install: (app: App) => {
    app.component(_IconHtml5Line.name, _IconHtml5Line);
  }
});

export default IconHtml5Line;