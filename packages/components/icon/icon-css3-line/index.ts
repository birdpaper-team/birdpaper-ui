import type { App } from 'vue';
import _IconCss3Line from './icon-css3-line.vue';

const IconCss3Line = Object.assign(_IconCss3Line, {
  install: (app: App) => {
    app.component(_IconCss3Line.name, _IconCss3Line);
  }
});

export default IconCss3Line;