import type { App } from 'vue';
import _IconTrademark from './icon-trademark.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconTrademark.name = getComponentsPrefix() + _IconTrademark.name;

const IconTrademark = Object.assign(_IconTrademark, {
  install: (app: App) => {
    app.component(_IconTrademark.name, _IconTrademark);
  }
});

export default IconTrademark;