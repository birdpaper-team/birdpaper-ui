import type { App } from 'vue';
import _IconVipOne from './icon-vip-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconVipOne.name = getComponentsPrefix() + _IconVipOne.name;

const IconVipOne = Object.assign(_IconVipOne, {
  install: (app: App) => {
    app.component(_IconVipOne.name, _IconVipOne);
  }
});

export default IconVipOne;