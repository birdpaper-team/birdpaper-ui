import type { App } from 'vue';
import _IconBytedance from './icon-bytedance.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconBytedance.name = getComponentsPrefix() + _IconBytedance.name;

const IconBytedance = Object.assign(_IconBytedance, {
  install: (app: App) => {
    app.component(_IconBytedance.name, _IconBytedance);
  }
});

export default IconBytedance;