import type { App } from 'vue';
import _IconWeiboLine from './icon-weibo-line.vue';

const IconWeiboLine = Object.assign(_IconWeiboLine, {
  install: (app: App) => {
    app.component(_IconWeiboLine.name, _IconWeiboLine);
  }
});

export default IconWeiboLine;