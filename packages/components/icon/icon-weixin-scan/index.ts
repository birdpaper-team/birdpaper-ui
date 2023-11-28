import type { App } from 'vue';
import _IconWeixinScan from './icon-weixin-scan.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconWeixinScan.name = getComponentsPrefix() + _IconWeixinScan.name;

const IconWeixinScan = Object.assign(_IconWeixinScan, {
  install: (app: App) => {
    app.component(_IconWeixinScan.name, _IconWeixinScan);
  }
});

export default IconWeixinScan;