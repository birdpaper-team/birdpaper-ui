import type { App } from 'vue';
import _IconWechatPayLine from './icon-wechat-pay-line.vue';

const IconWechatPayLine = Object.assign(_IconWechatPayLine, {
  install: (app: App) => {
    app.component(_IconWechatPayLine.name, _IconWechatPayLine);
  }
});

export default IconWechatPayLine;