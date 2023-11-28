import type { App } from 'vue';
import _IconAlipay from './icon-alipay.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconAlipay.name = getComponentsPrefix() + _IconAlipay.name;

const IconAlipay = Object.assign(_IconAlipay, {
  install: (app: App) => {
    app.component(_IconAlipay.name, _IconAlipay);
  }
});

export default IconAlipay;