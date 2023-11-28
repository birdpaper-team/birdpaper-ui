import type { App } from 'vue';
import _IconVip from './icon-vip.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconVip.name = getComponentsPrefix() + _IconVip.name;

const IconVip = Object.assign(_IconVip, {
  install: (app: App) => {
    app.component(_IconVip.name, _IconVip);
  }
});

export default IconVip;