import type { App } from 'vue';
import _IconWechatChannelsLine from './icon-wechat-channels-line.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconWechatChannelsLine.name = getComponentsPrefix() + _IconWechatChannelsLine.name;

const IconWechatChannelsLine = Object.assign(_IconWechatChannelsLine, {
  install: (app: App) => {
    app.component(_IconWechatChannelsLine.name, _IconWechatChannelsLine);
  }
});

export default IconWechatChannelsLine;