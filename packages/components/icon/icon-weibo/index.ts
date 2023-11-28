import type { App } from 'vue';
import _IconWeibo from './icon-weibo.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconWeibo.name = getComponentsPrefix() + _IconWeibo.name;

const IconWeibo = Object.assign(_IconWeibo, {
  install: (app: App) => {
    app.component(_IconWeibo.name, _IconWeibo);
  }
});

export default IconWeibo;