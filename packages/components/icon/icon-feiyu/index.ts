import type { App } from 'vue';
import _IconFeiyu from './icon-feiyu.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFeiyu.name = getComponentsPrefix() + _IconFeiyu.name;

const IconFeiyu = Object.assign(_IconFeiyu, {
  install: (app: App) => {
    app.component(_IconFeiyu.name, _IconFeiyu);
  }
});

export default IconFeiyu;