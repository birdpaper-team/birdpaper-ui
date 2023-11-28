import type { App } from 'vue';
import _IconBracketsLine from './icon-brackets-line.vue';

const IconBracketsLine = Object.assign(_IconBracketsLine, {
  install: (app: App) => {
    app.component(_IconBracketsLine.name, _IconBracketsLine);
  }
});

export default IconBracketsLine;