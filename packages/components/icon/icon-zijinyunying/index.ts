import type { App } from 'vue';
import _IconZijinyunying from './icon-zijinyunying.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconZijinyunying.name = getComponentsPrefix() + _IconZijinyunying.name;

const IconZijinyunying = Object.assign(_IconZijinyunying, {
  install: (app: App) => {
    app.component(_IconZijinyunying.name, _IconZijinyunying);
  }
});

export default IconZijinyunying;