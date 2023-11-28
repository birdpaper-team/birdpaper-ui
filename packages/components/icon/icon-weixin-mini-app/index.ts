import type { App } from 'vue';
import _IconWeixinMiniApp from './icon-weixin-mini-app.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconWeixinMiniApp.name = getComponentsPrefix() + _IconWeixinMiniApp.name;

const IconWeixinMiniApp = Object.assign(_IconWeixinMiniApp, {
  install: (app: App) => {
    app.component(_IconWeixinMiniApp.name, _IconWeixinMiniApp);
  }
});

export default IconWeixinMiniApp;