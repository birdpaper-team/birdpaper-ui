import type { App } from 'vue';
import _IconWechatChannelsLine from './icon-wechat-channels-line.vue';

const IconWechatChannelsLine = Object.assign(_IconWechatChannelsLine, {
  install: (app: App) => {
    app.component(_IconWechatChannelsLine.name, _IconWechatChannelsLine);
  }
});

export default IconWechatChannelsLine;