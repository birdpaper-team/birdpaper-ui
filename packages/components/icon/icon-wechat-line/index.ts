import type { App } from 'vue';
import _IconWechatLine from './icon-wechat-line.vue';

const IconWechatLine = Object.assign(_IconWechatLine, {
  install: (app: App) => {
    app.component(_IconWechatLine.name, _IconWechatLine);
  }
});

export default IconWechatLine;