import type { App } from 'vue';
import _IconWechatPayLine from './icon-wechat-pay-line.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconWechatPayLine.name = getComponentsPrefix() + _IconWechatPayLine.name;

const IconWechatPayLine = Object.assign(_IconWechatPayLine, {
  install: (app: App) => {
    app.component(_IconWechatPayLine.name, _IconWechatPayLine);
  }
});

export default IconWechatPayLine;