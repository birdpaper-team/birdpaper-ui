import type { App } from 'vue';
import _IconWeixinMarket from './icon-weixin-market.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconWeixinMarket.name = getComponentsPrefix() + _IconWeixinMarket.name;

const IconWeixinMarket = Object.assign(_IconWeixinMarket, {
  install: (app: App) => {
    app.component(_IconWeixinMarket.name, _IconWeixinMarket);
  }
});

export default IconWeixinMarket;