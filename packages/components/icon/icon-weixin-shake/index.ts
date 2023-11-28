import type { App } from 'vue';
import _IconWeixinShake from './icon-weixin-shake.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconWeixinShake.name = getComponentsPrefix() + _IconWeixinShake.name;

const IconWeixinShake = Object.assign(_IconWeixinShake, {
  install: (app: App) => {
    app.component(_IconWeixinShake.name, _IconWeixinShake);
  }
});

export default IconWeixinShake;