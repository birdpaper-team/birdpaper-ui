import type { App } from 'vue';
import _IconBracesLine from './icon-braces-line.vue';

const IconBracesLine = Object.assign(_IconBracesLine, {
  install: (app: App) => {
    app.component(_IconBracesLine.name, _IconBracesLine);
  }
});

export default IconBracesLine;